import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  id:number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.router.navigate([`/course/${this.id}/course-details`]);
    });
  }

  onSelectCourse(courseId: number){
    this.router.navigate([`course/${courseId}`, {relativeTo: this.route}]);
  }

}
