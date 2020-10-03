import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'courseName', 'term', 'enrolledAs', 'published'];
  currentCouseDataSource;
  allCourseDataSource;

  courseData = {
   curentCourse : [
    {position: 1, courseName: 'Current Course', term: "Fall 2020", enrolledAs: 'Student', published: 'Yes', id: 1},
    {position: 1, courseName: 'Current Course', term: "Fall 2020", enrolledAs: 'Student', published: 'Yes', id: 2},
    {position: 1, courseName: 'Current Course', term: "Fall 2020", enrolledAs: 'Student', published: 'Yes', id: 3}

  ],
  allCourses: [
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes', id: 4},
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes', id: 5},
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes', id: 6},
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes', id: 7},
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes', id: 8},
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes', id: 9},
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes', id: 10},
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes', id: 11},
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes', id: 12}
  ]
}

  constructor() { }

  ngOnInit(): void {
    this.currentCouseDataSource = this.courseData.curentCourse;
    this.allCourseDataSource = this.courseData.allCourses;
  }

}
