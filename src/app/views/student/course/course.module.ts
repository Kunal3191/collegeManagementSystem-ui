import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.component';
import { CourseRoutingModule } from './course-routing.component';
import { CourseComponent } from './course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { GradeComponent } from './grade/grade.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    CourseRoutingModule
  ],
  exports: [
    LayoutModule,
    CourseListComponent,
    CourseComponent,
    CourseDetailsComponent
  ],
  declarations: [
    CourseListComponent,
    CourseComponent,
    CourseDetailsComponent,
    GradeComponent
  ],
  entryComponents: [
  ]
})
export class CourseModule { }
