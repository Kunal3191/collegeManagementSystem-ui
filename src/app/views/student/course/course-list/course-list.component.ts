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
    {position: 1, courseName: 'Current Course', term: "Fall 2020", enrolledAs: 'Student', published: 'Yes'},
    {position: 1, courseName: 'Current Course', term: "Fall 2020", enrolledAs: 'Student', published: 'Yes'},
    {position: 1, courseName: 'Current Course', term: "Fall 2020", enrolledAs: 'Student', published: 'Yes'}

  ],
  allCourses: [
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes'},
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes'},
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes'},
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes'},
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes'},
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes'},
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes'},
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes'},
    {position: 1, courseName: 'Old Course', term: "Fall 2019", enrolledAs: 'Student', published: 'Yes'}
  ]
}

  constructor() { }

  ngOnInit(): void {
    this.currentCouseDataSource = this.courseData.curentCourse;
    this.allCourseDataSource = this.courseData.allCourses;
  }

}
