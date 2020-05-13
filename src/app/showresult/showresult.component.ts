import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showresult',
  templateUrl: './showresult.component.html',
  styleUrls: ['./showresult.component.css']
})
export class ShowresultComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  score;
  percentage;
  result;
  res;
  ngOnInit() {
  
    this.route.queryParamMap.subscribe((data) => { this.score= JSON.parse(data.get('scor')), this.percentage = JSON.parse(data.get('per')), this.result = JSON.parse(data.get('resl')) });
    if(this.result == 0){
      this.res= "fail";
    }
    else{
      this.res= "pass";
    }
    console.log(this.score);
    console.log(this.percentage);
    console.log(this.result);
    console.log(this.res);
// please remove the console logs when required
  }

}
