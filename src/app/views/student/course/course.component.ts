import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses = {
    allCourses: [
      {
      courseName: "abc",
      term: "2020",
      enrolledAs: "student",
      published: "Yes"
    },
    {
      courseName: "abc",
      term: "2020",
      enrolledAs: "student",
      published: "Yes"
    },
  ],
    currentCourse: [
      {
        courseName: "abc",
        term: "2020",
        enrolledAs: "student",
        published: "Yes"
      },
      {
        courseName: "abc",
        term: "2020",
        enrolledAs: "student",
        published: "Yes"
      },
      {
        courseName: "abc",
        term: "2020",
        enrolledAs: "student",
        published: "Yes"
      },
      {
        courseName: "abc",
        term: "2020",
        enrolledAs: "student",
        published: "Yes"
      },
  ]
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelectCourse(){
    this.router.navigate(['course-list']);
  }

}
