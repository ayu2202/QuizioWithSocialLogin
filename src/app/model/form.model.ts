export class studentdetails {
    fname;
    lname;
    role;
    code;
    mobile;
    dob;
    email;
    pw;
    cpw;
    gender;
}

export class serverresponse {
    msg;
    status;
    description;
    
}

export class logindetails {
    email;
    password;
}

export class addcourseinfo {
    category;
    courseName;
}

export class addquestioninfo { 
    qno;
    courseselected;
    question;
    a;
    b;
    c;
    d;
    correct; 
}

//added new class for getting the course info
export class google_auth_response {
    PROVIDER_ID : any
    provider: any
}

export class courseinfo {
    _id: string;
    category:string;
    coursename:string;
}

export class coursewithquestions {
    _id: string;
    category:string;
    coursename:string;
    Questions:string;
}

export class studentoption {
    optn;
}

export class result {
    qno;
    ques;
    a;
    b;
    c;
    d;
    correct;
    submitted: [];   //Result array is stored here.
}

export class reshistory{
    firstname:string;
    lastname:string;
    role:string;
    countrycode:string;
    mobile:string;
    dob:string;
    email:string;
    password:string;
    cpassword:string;
    gender:string;
    exams=[];      
}
