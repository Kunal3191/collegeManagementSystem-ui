import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.component';
import { StudentComponent } from './student.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseComponent } from './course/course.component';


@NgModule({
  imports: [
    CommonModule,
    // StudentRoutingModule
  ],
  declarations: [
  ],
  entryComponents: [
  ]
})
export class StudentModule { }
