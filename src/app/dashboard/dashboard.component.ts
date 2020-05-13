import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //local objectc to store all the data sent from the signup component through the queryParams parameter
  stuinfo_dashboard;

  //property route of type ActivatedRoute to receive the data sent from the signup component
  constructor(private route: ActivatedRoute, private ds?: DataService) { }

  ngOnInit() {

    // receive the data sent from the signup component through queryparam in navigate
    
    //queryParamMap is used to receive the data sent from any component
    this.route.queryParamMap.subscribe((data) => {

      //JSON.parse is used to convert the received string again into JSON object
      this.stuinfo_dashboard = JSON.parse(data.get('stuinfo_signup'));

      //just to check if stu info is stored successfully in the object
      console.log(this.stuinfo_dashboard);

    }) 
    


  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
