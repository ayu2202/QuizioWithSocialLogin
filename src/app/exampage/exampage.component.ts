import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { studentoption } from '../model/form.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-exampage',
  templateUrl: './exampage.component.html',
  styleUrls: ['./exampage.component.css']
})

export class ExampageComponent implements OnInit {

  stu_option = new studentoption();
  questions_obj;
  qno;
  quesarray = [];
  ques_no;
  firstques;
  result = []; //array to store result
  

  constructor(private route: ActivatedRoute, private ds: DataService, private router: Router) { }

  ngOnInit() {

    var i;
    //receive all questions  
    this.route.queryParamMap.subscribe((data) => { this.questions_obj = JSON.parse(data.get('course_questions')) })
      console.log(this.questions_obj);

      this.quesarray = this.questions_obj.Questions;
      console.log(this.quesarray);

      console.log(this.quesarray.length);

    for(i = 0; i < this.quesarray.length; i++)
    {
        if(this.quesarray[i].qno == 1)
        {
            this.firstques = this.quesarray[i];
            console.log(this.firstques);
        }
        else
        {
            console.log("Please ask admmin to add ques to this course..");
        }
    }
  }

  prev(qno){
    var i = qno;
    i=i-1;

    this.firstques = this.quesarray[i-1];
  }
 
  
  next(qno){
    var restform = <HTMLFormElement>document.getElementById('quesfrm');
    
    var j = qno; //j = 1 for 1st iteration

    if(j < this.quesarray.length)
    {
      if(this.stu_option.optn == this.quesarray[j-1].correct)
      {
          this.result[j-1] = 1;
      }
      else
      {
          this.result[j-1] = 0;
      }
      console.log(this.result);
  
      j=j+1;
  
      this.firstques = this.quesarray[j-1];
      restform.reset();
    }
    
    else
    {
        if(this.stu_option.optn == this.quesarray[j-1].correct)
        {
            this.result[j-1] = 1;
        }
        else
        {
            this.result[j-1] = 0;
        }
        console.log(this.result);
        var r = { resultarray: this.result };
       
        this.router.navigate(['submit'], { queryParams: { res: JSON.stringify(r), ques: JSON.stringify(this.questions_obj) }});
    }
    //check if the selected option was correct or not
    
  }



}
 