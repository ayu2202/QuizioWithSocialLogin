import { Component, OnInit } from '@angular/core';
import { addcourseinfo } from '../model/form.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  addcourse_ob = new addcourseinfo();
  banner: any;
  received_data;

  constructor(private ds: DataService, private router: Router) { }

  ngOnInit() {
  }

  //assigning the file to banner property created here only
  get_file(evnt: any) 
  {
     this.banner = evnt.target.files[0];
  }

  //Function to add
  add_course()
  {
    const coursedata = new FormData();
    coursedata.set('banner', this.banner);
    coursedata.set('category', this.addcourse_ob.category);
    coursedata.set('coursename', this.addcourse_ob.courseName);
  
    this.ds.AddCourseData(coursedata).subscribe((data) => {
      if(data.category != "not defined")
      {
        console.log(data);
        this.received_data = data;
        console.log("Course Add SuccessFully !");
        this.router.navigate(['dashboardadmin'], {queryParams: { courseinfo: JSON.stringify(this.received_data) }});
      }
      else
      {
        alert("Error adding the course !");
      }
    })
  }

}
