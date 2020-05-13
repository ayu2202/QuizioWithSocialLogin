import { Component, OnInit } from '@angular/core';
import { addquestioninfo } from '../model/form.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  addques_ob = new addquestioninfo();
  course_ob;

  constructor(private ds: DataService) { } 

  ngOnInit() {
    this.ds.getcourseforquestion().subscribe((data) => {
        this.course_ob = data;
    })
  }

  add_question()
  {
    this.ds.AddQuestion(this.addques_ob).subscribe((data) => {
      if(data.status == "ok")
      {
        console.log("Question Added Succesfully to the DataBase !");
      }
      else
      {
        alert("Question Uploading Failed. Contact Your Admin.");
      }
    })
  }

}
