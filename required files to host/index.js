const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const objectID = require('mongodb').objectID;
const fs = require('fs');  //While dealing with the image file
const multer = require('multer');
const path = require('path');

//create a new mongoclient object to perform the connection between server and DB
let client = new MongoClient("mongodb://localhost:27017/quizio", { useNewUrlParser: true });

//Object to perform operation in the DB
let stu_client;

//initial connection request from the server to the db
client.connect((err, db) => {
    if(!err)
    {
        stu_client = db;
    }

    else
    {
        console.log(err);
    }
})

//Create a new express object
let app = express();

//To accept requests from cross domains
app.use(cors());

app.use(express.static(path.join(__dirname,'uploads')));


//when url api/regigster is hit by the client, bodyParser stores the received request in the body of req parameter,
// res is used to send response from the server
app.post("/api/register", bodyParser.json(), (req, res) => {
    
    //inserting the query to access DB 'quizio' and the collection 'student' inside it in a variable 'collection'
    const collection = stu_client.db("quizio").collection("student");

    //Actual query to insert record in the DB, since complete info is stored in the body of req by bodyParser.JSON
    collection.insertOne(req.body, (err, r) => {
        console.log("Your insertion result is " + r.ops[0]);
        console.log("insertedID is " + r.insertedId);

        if(!err)
        {
            res.send({msg: "registration successful", status: "ok", desc: "all ok"});
        }

        else
        {
            res.send({msg: "Registration Failed.", status: "not ok", desc: "Error in Database"});
        }
    })
})

//API for login Validation

app.post('/api/login',bodyParser.json() ,(req,res)=>{
    
    const collection = stu_client.db('quizio').collection('student');
    
    collection.findOne({'email':req.body.email, 'pw':req.body.password}, (err,docs)=>{
        if(!err && docs)
        {
            console.log("Successful Login");
            res.send({msg:"sucessfully Logged In", status:'ok', description:docs});
        }
        else{
            console.log("Login Failed !!");
            res.send({msg:"Incorrect Credentials",starus:"ok", description:docs});
        }
    });
    
    })

//API to add course to DB

var storage = multer.diskStorage({
        
        destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
        filename: function (req, file, cb) {
        cb(null,"temp.jpg")
        }
  })
 
  var upload = multer({ storage: storage });


app.post("/api/addcourse", upload.single('banner'), function(req, res) {
    
    //Creates a new collection course
    const collection = stu_client.db('quizio').collection('courses');

    collection.insertOne(req.body, (err, docs) => {
        if(!err)
        {
                 
            fs.renameSync('./uploads/temp.jpg', './uploads/' + docs.insertedId + '.jpg'); 
            res.send(docs);
        
        }
        else
        {
            res.send( { category: "not defined", coursename: "not defined" } );
        }
    })
})

//API to upload question to DB

app.post("/api/addquestion", bodyParser.json(), (req, res) => {
    const collection = stu_client.db("quizio").collection("courses");

    collection.updateOne({'coursename': req.body.courseselected}, {
        $push:
            {
                Questions: {
                    qno: req.body.quesnum,
                    question: req.body.question,
                    a: req.body.optna,
                    b: req.body.optnb,
                    c: req.body.optnc,
                    d: req.body.optnd,
                    correct: req.body.rightoptn
                }
            }
    }, (err, docs) => {
        if(!err)
        {
            console.log(docs);
            res.send( { msg: "Question uploaded Successfully", status: "ok", description: "All OK" } )
        }
        else
        {
            console.log(err);
            res.send( { msg: "Question uploading Failed", status: "not ok", description: "Not Done Try Again" } )
        }
    })
})
// API For add the examresult to students 
app.post("/api/addexam",bodyParser.json(),(req, res)=> {
    const collection = stu_client.db("quizio").collection("student");

        collection.updateOne({'email':req.body.email},{
            $push:{
                exams:{
                    date: req.body.date,
                    score: req.body.score,
                    percentage: req.body.percent,
                    result: req.body.res
                }
            }
        }, (err, docs) => {
            if(!err)
            {
                console.log(docs);
                res.send( { msg: "Question uploaded Successfully", status: "ok", description: "All OK" } )
            }
            else
            {
                console.log(err);
                res.send( { msg: "Question uploading Failed", status: "not ok", description: "Not Done Try Again" } )
            }
        })
})
//getting the data to the admin adcontent dashboard and doing ngfor for creating multiple divs
app.get('/api/adcontent',(req,res)=>{
   
    const collection = stu_client.db('quizio').collection("courses");
    
    collection.find().toArray(function(err, docs) {
        //console.log(docs);
        res.send(docs);
      });
    
    })


//api for getting all data of students collection
// app.get('/api/rer',(req, res) => {
//     const collection = stu_client.db('quizio').collection("student");
    
//     collection.find().toArray(function(err, docs) {
//         console.log(docs);
//         res.send(docs);
//       });
// })
app.post('/api/rer', bodyParser.json(), (req, res) => {
    console.log(req.body);
    const collection = stu_client.db('quizio').collection('student');
    
    collection.findOne(req.body, (err, student) => {
        if(!err)
        {
            console.log(student.exams);
            res.send(student.exams);
        }
      });
})



app.post('/api/specificcourse', bodyParser.json(), (req, res) => {
    console.log(req.body);
    const collection = stu_client.db("quizio").collection("courses");

    collection.findOne(req.body, (err, course) => {
        if(!err)
        {
            console.log(course);
            res.send(course);
        }
    });
})

//Submit Result

app.post('/api/result', bodyParser.json(), (req, res) => {
    console.log("Hello");
    console.log(req.body);
    const collection = stu_client.db("quizio").collection("result");

    collection.insertOne(req.body, (err, docs) => {
            if(!err)
            {
                console.log("Result inserted successfully !");
                res.send({ msg: "uploaded", status: "ok", desc: "Result Submission Successful" });
            }
            else
            {
                console.log("Result insertion Failed. Try Again.");
                res.send({ msg: "Result uploading failed", status: "not ok", desc: "Result Submission Failed" })
            }
    })
})



app.listen(3000, () => {
    console.log("Server: Hey Im listening to port 3000 :)");
})