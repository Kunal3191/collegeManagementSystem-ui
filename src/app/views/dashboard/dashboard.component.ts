import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/sevices/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loginData: any;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.loginDetails.subscribe(val => {
      console.log("details", val);
      this.loginData = val[0];
    })
  }

}
