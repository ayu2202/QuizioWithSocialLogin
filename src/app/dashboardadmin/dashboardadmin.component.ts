import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css']
})
export class DashboardadminComponent implements OnInit {

  crsinfo;
  admin_info;
  socialuserinfo = {
    'userprofilepic' : localStorage.getItem('userpic'),
    'userprofilename' : localStorage.getItem('userName')
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() { 

    this.route.queryParamMap.subscribe((data) => {
      this.admin_info = JSON.parse(data.get('stuinfo_signup'));
      console.log(this.admin_info);
    }
  )}
}
