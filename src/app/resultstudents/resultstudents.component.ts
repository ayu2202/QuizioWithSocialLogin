import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

@Component({
  selector: 'app-resultstudents',
  templateUrl: './resultstudents.component.html',
  styleUrls: ['./resultstudents.component.css']
})
export class ResultstudentsComponent implements OnInit {
  spstd;
  historyobj;
  getobj;
  constructor(private ds:DataService) { }

  ngOnInit() {
    // this.ds.getallhistoy().subscribe((data)=>{this.getobj = data;});
    var p={email: localStorage.getItem('email')};
    this.ds.getallhistoy(p).subscribe((data) => { this.spstd=data; });
    console.log(this.spstd);
    // if (this.getobj.email== localStorage.getItem('email')){
    //   this.specificstudent=this.getobj.exams;
    //   this.historyobj = this.specificstudent.exams;
    // }
    // var i;
    // var temparr=[];
    // for(i = 0; i < this.getobj.length; i++){
    //   if(this.getobj[i].email == localStorage.getItem('email')){
    //     temparr=this.getobj[i].exams;
    //   }
    // }
    // this.ds.getallhistoy(p).subscribe((data) => { this.specificstudent= JSON.stringify(data); });
    // console.log(this.specificstudent);
    // this.historyobj = this.specificstudent.exams;
    

  }

}
