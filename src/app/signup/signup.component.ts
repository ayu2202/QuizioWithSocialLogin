import { Component, OnInit } from '@angular/core';
import { studentdetails } from '../model/form.model';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userprofilepic: any;
  userprofilename: any;

  //stu is the object storing all the information of student
  stu = new studentdetails();

  //property router of type Router to use the navigate function in order to navigate to other component
  constructor(private router: Router, private ds: DataService) { }

  ngOnInit() {
    
  }

  //Definition of function that is called on the click of the button 'create a new account'
  register()
  {
    //Post data to the server
    this.ds.stu_register(this.stu).subscribe((data) => {
      console.log("Hello ");
      console.log(data);
      if((data.status == "ok") && (this.stu.role == "student"))
      {
        console.log("Thankyou for your registration. Student registered successfully !!!");
        this.router.navigate(['dashboard'], {queryParams: { stuinfo_signup: JSON.stringify(this.stu) }});  
      }

      else if((data.status == "ok") && (this.stu.role == "admin"))
      {
        console.log("Thankyou for your registration. Admin registered successfully !!!");
        this.router.navigate(['dashboardadmin'], { queryParams : { stuinfo_signup: JSON.stringify(this.stu)}});
      }

      else if(data.status == "not ok")
      {
        alert("Registration Failed. Try again later or contact your admin !!!");
      }
    })



      // navigate to the dashboard component and send the complete details through queryParams 

      //conversion of JSON to string is required because subscribe function on other component expects a string to be received
      this.router.navigate(['dashboard'], {queryParams: { stuinfo_signup: JSON.stringify(this.stu) }});
  }

}
