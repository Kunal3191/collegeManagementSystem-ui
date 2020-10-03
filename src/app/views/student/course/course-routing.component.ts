import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course.component';
import { GradeComponent } from './grade/grade.component';

const studentRoutes: Routes = [
    { path: '', component: CourseComponent, children: [
        { path: 'course-details', component: CourseDetailsComponent},
        { path: 'grade', component: GradeComponent}
    ]},
    
]

@NgModule({
    imports: [
        RouterModule.forChild(studentRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CourseRoutingModule { }
