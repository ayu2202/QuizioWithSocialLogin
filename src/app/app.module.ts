import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule ,HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashAdContentComponent } from './dash-ad-content/dash-ad-content.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';
import { ExampageComponent } from './exampage/exampage.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { SubmitexamComponent } from './submitexam/submitexam.component';
import { ShowresultComponent } from './showresult/showresult.component';
import { ResultstudentsComponent } from './resultstudents/resultstudents.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

//Get client ID from google and facebook 
let google_client_ID : string = "574857836985-p92fk9vuhlrpngfo8587ot7v236deg08.apps.googleusercontent.com";
let facebook_client_ID : string = "619214815604389";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google_client_ID)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(facebook_client_ID)
  }
]);
 
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    DashboardadminComponent,
    DashAdContentComponent,
    AddcourseComponent,
    AddquestionComponent,
    DashboardadminComponent,
    ExampageComponent,
    InstructionsComponent,
    SubmitexamComponent,
    ShowresultComponent,
    ResultstudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
