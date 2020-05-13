import { Injectable } from '@angular/core';
import { HttpClientModule ,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverresponse, studentdetails, addcourseinfo, courseinfo, coursewithquestions, result, reshistory, google_auth_response } from './model/form.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //create a new property http of HttpClient to access the server
  constructor(private http: HttpClient) { }

  //define the function which posts or sends data to server and returns the response
  stu_register(stuinfo_obj): Observable<serverresponse>
  {
    return this.http.post<serverresponse>("http://localhost:3000/api/register", stuinfo_obj);
  }

  stu_login(logininfo_ob): Observable<serverresponse>
  {
    return this.http.post<serverresponse>("http://localhost:3000/api/login", logininfo_ob);
  }

  AddCourseData(course_ob): Observable<addcourseinfo>
  {
    return this.http.post<addcourseinfo>("http://localhost:3000/api/addcourse", course_ob);
  }

  AddQuestion(ques_ob): Observable<serverresponse>
  {
    return this.http.post<serverresponse>("http://localhost:3000/api/addquestion", ques_ob);
  } 

  AddExamTaken(exam_ob): Observable<serverresponse>
  {
    return this.http.post<serverresponse>("http://localhost:3000/api/addexam", exam_ob);
  }

  //to get all the course thos function is being used
  
  getallcourse():Observable<courseinfo[]>
  {
    return this.http.get<courseinfo[]>('http://localhost:3000/api/adcontent');
  }

  google_auth():Observable<google_auth_response>
  {
    return this.http.get<google_auth_response>('http://localhost:3000/api/googleauth');
  }
  // getallhistoy():Observable<reshistory[]>
  // {
  //   // return this.http.get<reshistory[]>('http://localhost:3000/api/reshistory');
  //   return this.http.get<reshistory[]>('http://localhost:3000/api/rer');
  // }
  getallhistoy(getstudent): Observable<reshistory>
  {
    // return this.http.get<reshistory[]>('http://localhost:3000/api/reshistory');
    return this.http.post<reshistory>('http://localhost:3000/api/rer', getstudent);
  }


  //func to get only single object

  getspecificcourse(getcourse): Observable<coursewithquestions>
  {
    return this.http.post<coursewithquestions>('http://localhost:3000/api/specificcourse', getcourse);
  }


  //Get course info for to add questions

  getcourseforquestion(): Observable<courseinfo[]>
  {
    return this.http.get<courseinfo[]>('http://localhost:3000/api/adcontent');
  }

  //Insert result in database

  submitresult(res_arr): Observable<serverresponse>
  {
    return this.http.post<serverresponse>('http://localhost:3000/api/result', res_arr);
  }
}