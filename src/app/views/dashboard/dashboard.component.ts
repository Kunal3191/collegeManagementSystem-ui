import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/sevices/common.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { RegisterationFormComponent } from '../student/registeration-form/registeration-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loginData: any;
  courses = {
    allCourses: [
      {
      courseName: "abc",
      term: "2020",
      enrolledAs: "student",
      published: "Yes",
      id: 1
    },
    {
      courseName: "abc",
      term: "2020",
      enrolledAs: "student",
      published: "Yes",
      id: 2
    },
  ],
    currentCourse: [
      {
        courseName: "abc",
        term: "2020",
        enrolledAs: "student",
        published: "Yes",
        id: 3
      },
      {
        courseName: "abc",
        term: "2020",
        enrolledAs: "student",
        published: "Yes",
        id: 4
      },
      {
        courseName: "abc",
        term: "2020",
        enrolledAs: "student",
        published: "Yes",
        id: 5
      },
      {
        courseName: "abc",
        term: "2020",
        enrolledAs: "student",
        published: "Yes",
        id: 6
      },
  ]
  }

  constructor(private commonService: CommonService, private MatDialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.commonService.loginDetails.subscribe(val => {
      console.log("details", val);
      this.loginData = val[0];
    })
  }

  onSelectCourse(courseId){
    this.router.navigate([`course/${courseId}`]);
  }
}
