import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DashAdContentComponent } from './dash-ad-content/dash-ad-content.component';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { ExampageComponent } from './exampage/exampage.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { SubmitexamComponent } from './submitexam/submitexam.component';
import { ShowresultComponent } from './showresult/showresult.component';
import { ResultstudentsComponent } from './resultstudents/resultstudents.component';

const routes: Routes = [{ path: '', component: HomeComponent },
                        { path: 'login', component: LoginComponent },                                                
                        { path: 'signup', component: SignupComponent },

                        //children routes forstudent dashboard
                        { path: 'dashboard', component: DashboardComponent,children:[{path:'',component:DashAdContentComponent},
                                                                                      {path: 'history',component:ResultstudentsComponent},
                                                                                      {path:'dashadcontent',component:DashAdContentComponent}]},
                        { path: 'signup/home', component: HomeComponent },
                        { path: 'login/signup', component: SignupComponent },
                        // { path: 'dashboardadmin/', component: DashAdContentComponent },
                        //added children routes for admin dashboard contents
                        { path: 'dashboardadmin', component: DashboardadminComponent,children:[{path:'',component:DashAdContentComponent},
                                                                                              {path:'dashadcontent',component:DashAdContentComponent}, 
                                                                                               { path: 'addcourse', component: AddcourseComponent },
                                                                                               { path: 'history',component:ResultstudentsComponent},
                                                                                               { path: 'addquestion', component: AddquestionComponent },
                                                                                               { path: 'quiz', component: ExampageComponent }]},
                        { path: 'instruction', component: InstructionsComponent },
                        //added the path for exam component becase when in instruction path is instruction/ now from here you are going to some other component
                        //but if you don't want to do that please create a new comp as children of instruction
                        { path: 'exam', component: ExampageComponent },
                        { path: 'submit', component: SubmitexamComponent ,children:[{path:'showre', component:ShowresultComponent}] },
                        
                        // { path: 'addcourse', component: AddcourseComponent },
                        // { path: 'addquestion', component: AddquestionComponent }
                      ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
