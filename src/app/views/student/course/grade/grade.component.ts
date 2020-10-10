import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
  displayedColumns: string[] = ['assignmentName', 'dueDate', 'status', 'score', 'outOf'];
  assignmentDataSource;
  courseName = '';
  dueDate = ''

  gradeData = [
    { assignmentName: 'Test Assignment 1', dueDate: new Date(), status: "submitted", score: 3, outOf: 5 },
    { assignmentName: 'Test Assignment 2', dueDate: new Date(), status: "submitted", score: 3, outOf: 5 },
    { assignmentName: 'Test Assignment 3', dueDate: new Date(), status: "submitted", score: 3, outOf: 5 },

  ]

  constructor() { }

  ngOnInit(): void {
    this.assignmentDataSource = this.gradeData;
  }

  getTotalScore() {
    return this.gradeData.map(t => t.score).reduce((acc, value) => acc + value, 0);
  }

  getTotalOutOf() {
    return this.gradeData.map(t => t.outOf).reduce((acc, value) => acc + value, 0);
  }

}
