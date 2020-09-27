import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CommonService } from 'src/app/sevices/common.service';

export class Notification {
  _id: number;
  createdAt: string;
  createdBy: string;
  createdFor: string;
  message: string;
  read: boolean;
  updatedAt: string;
}

@Component({
  selector: 'app-head-nav',
  templateUrl: './head-nav.component.html',
  styleUrls: ['./head-nav.component.css']
})
export class HeadNavComponent implements OnInit {

  @Output() Expanded = new EventEmitter<boolean>();
  userInfo: any = {
    firstName: '',
    lastName: ''
  };
  constructor(private router: Router, private commonService: CommonService) {
  }

  ExpandColapse() {
    this.Expanded.emit(true);
  }

  ngOnInit() {
    try {
      this.commonService.loginDetails.subscribe(val => {
        console.log("details", val);
        if(val)
        this.userInfo = val[0];
      })
    } catch (e) {
      console.log("error", e);
    }
  }


  gotoUserProfile() {
    try {
      this.router.navigate(['/user-profile']);
    } catch (e) {
      console.log("error", e);
    }
  }

  sessionObject: any;
  logout() {
    try {

    }
    catch (e) {
      console.log("error", e);
    }
  }

}
