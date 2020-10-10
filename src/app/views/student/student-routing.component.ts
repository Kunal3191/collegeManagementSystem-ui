import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { GradeComponent } from './course/grade/grade.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentComponent } from './student.component';

const studentRoutes: Routes = [
    { path: '', component: StudentComponent, children: [
        { path: 'student-details', component: StudentDetailsComponent},
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
export class StudentRoutingModule { }
