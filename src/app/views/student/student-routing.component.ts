import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student.component';

const studentRoutes: Routes = [
    {
        path: '', component: CourseComponent,
    },
    { path: 'course', component: CourseComponent, },
    { path: 'course-list', component: CourseListComponent }
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
