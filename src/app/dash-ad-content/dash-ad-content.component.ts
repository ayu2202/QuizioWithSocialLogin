import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-ad-content',
  templateUrl: './dash-ad-content.component.html',
  styleUrls: ['./dash-ad-content.component.css']
})
export class DashAdContentComponent implements OnInit {
  getobj;
  getspecificobj;

  constructor(private ds:DataService, private router: Router) { }

  ngOnInit() {

    //this is storing the data that we got in the data service to getobj
    this.ds.getallcourse().subscribe((data)=>{this.getobj = data;});
    // console.log(this.getobj)
    // this.getspecificobj=this.getobj;
    // console.log(this.getobj.coursename);
    // this.ds.getspecificcourse(this.getobj).subscribe((data) => {this.getspecificobj = data;});
  }

  rules(obj)
  {
      console.log("Hello " + obj);
      // var p = { courseid: obj };
      this.router.navigate(['instruction'], { queryParams: { quizdetails: obj }});
      //console.log(p);
  } 

}
