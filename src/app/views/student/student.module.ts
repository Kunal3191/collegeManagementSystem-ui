import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.component';
import { StudentComponent } from './student.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GradeComponent } from './course/grade/grade.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    StudentRoutingModule
  ],
  exports: [
    LayoutModule,
    CourseListComponent,
    CourseComponent,
    CourseDetailsComponent
  ],
  declarations: [
    CourseDetailsComponent,
    StudentDetailsComponent,
    CourseListComponent,
    CourseComponent,
    CourseDetailsComponent,
    GradeComponent
  ],
  entryComponents: [
  ]
})
export class StudentModule { }
