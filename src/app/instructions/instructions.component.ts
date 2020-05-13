import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit { 

  coursedata;
  specific_course_obj;

  constructor(private route: ActivatedRoute, private ds: DataService, private router: Router) { }

  ngOnInit() {
      this.route.queryParamMap.subscribe((data) => {
          this.coursedata = data.get('quizdetails');
          console.log(this.coursedata);
        })
        var p = { coursename: this.coursedata };

      this.ds.getspecificcourse(p).subscribe((data) => { this.specific_course_obj = JSON.stringify(data); });
   
      //alert(this.specific_course_obj);
  }

  startQuiz()
  {
      this.router.navigate(['exam'], { queryParams: { course_questions: this.specific_course_obj}});
  }

}
