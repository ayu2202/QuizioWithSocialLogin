import { Component, OnInit, AbstractType } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-submitexam',
  templateUrl: './submitexam.component.html',
  styleUrls: ['./submitexam.component.css']
})
export class SubmitexamComponent implements OnInit {

  Result;  //Variable to receive result array
  sc;
  page;
  re;
  question: any;
  submitted_obj; 
  
  constructor(private route: ActivatedRoute, private ds: DataService,private router: Router) { }

  ngOnInit() {
      this.route.queryParamMap.subscribe((data) => { this.Result = JSON.parse(data.get('res')), this.question = JSON.parse(data.get('ques')) });
      //console.log(this.Result.resultarray.length);
      //console.log(this.question.coursename);
      console.log(this.Result);

      // creating object with submitted answer and question to send to DB
      var obj = {
        currentCourse: this.question.coursename,
        questions: this.question.Questions,
        }

        for(var i = 0; i < this.Result.resultarray.length; i++)
        {
            if(this.Result.resultarray[i] == 1)
            {
                obj.questions[i].output = "right answer";
            }
            else if(this.Result.resultarray[i] == 0)
            {
                obj.questions[i].output = "wrong answer";
            }
        }

        this.submitted_obj = obj
  }

  submitExam()
  {


      var reslt;
      var x = this.Result.resultarray.length;
      var count = 0, percentage, score;
      
      for(var i = 0; i < x; i++)
      {
          if(this.Result.resultarray[i] == 1)
          {
              count++;
          }
      }
      score = count;
      console.log(score);
      percentage = (score/x)*100;
      console.log(percentage);
      if(percentage>=50){
        reslt=1;
      }
      else{
        reslt=0;

      }
      this.sc=score;
      this.page=percentage;
      
      this.re=reslt;
      var resl;
      if(reslt==0){
          resl='fail';
      }
      else{
          resl='pass';
      }

      
      var today = new Date();
      var r = {email:localStorage.getItem('email'),score: this.sc, percent:this.page, res:resl, date:today};
    
      console.log(r);
      this.ds.AddExamTaken(r).subscribe((data) => {
        if(data.status == "ok")
        {
          console.log("exam taken Added Succesfully to the DataBase !");
        }
        else
        {
          console.log("Exam taken Uploading Failed. Contact Your Admin.");
        }
      })
      this.router.navigate(['submit/showre'], { queryParams: {scor: this.sc, per:this.page, resl:this.re }});

      //calling DS function to add result into DB
      console.log(this.submitted_obj)

      this.ds.submitresult(this.submitted_obj).subscribe((data) => {
          if(data.status == "ok")
          {
              console.log("Result inserted successfully !");
          }
          else if(data.status == "not ok")
          {
              console.log("Result Submission failed. Try again or contact your admin.");
          }
      })
      
  }

}
