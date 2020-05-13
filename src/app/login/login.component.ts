import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { logindetails } from '../model/form.model';
import { DataService } from '../data.service';
import { BrowserModule } from '@angular/platform-browser';
import { SocialLoginModule, SocialUser, AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user : any = SocialUser;
  login_info = new logindetails();

  constructor(private router: Router, private ds: DataService, private authserve: AuthService) { }

  ngOnInit() {

  }

  dashboard_page()
  {
    console.log("Hello");
    this.ds.stu_login(this.login_info).subscribe((data) => {
      if(data.status == "ok")
      {
        localStorage.setItem("email", this.login_info.email);
        
        // console.log(data.description);
        //added the condition to navigate to the prop-er dashboard
        if(data.description.role == "admin"){
          console.log("Inside Admin Dashboard");
          this.router.navigate(['dashboardadmin']);
        }
        else{
          console.log("Inside Student Dashboard");
          this.router.navigate(['dashboard']);
        }

       
      }

      else
      {
        alert("Incorrect Credentials . Try Again");
      }
    })
  }

  googlelogin()
  {
    console.log("Inside the function -> googlelogin");
      this.authserve.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData;
      localStorage.setItem('userpic', this.user.photoUrl);
      localStorage.setItem('userName', this.user.name);
      console.log(this.user);
      if(this.user)
      {
        this.router.navigate(['signup']);
      }
      });
  }

  facebooklogin()
  {
      console.log("Inside the function -> facebooklogin");
      this.authserve.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData;
      localStorage.setItem('userpic', this.user.photoUrl);
      localStorage.setItem('userName', this.user.name);
      if(this.user)
      {
        this.router.navigate(['signup']);
      }
      });
  }

}

  