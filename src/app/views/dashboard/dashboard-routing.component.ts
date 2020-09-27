import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from '../student/course/course-list/course-list.component';
import { CourseComponent } from '../student/course/course.component';
import { StudentComponent } from '../student/student.component';

const studentRoutes: Routes = [
    {
        path: '', component: StudentComponent,
    },
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
export class DashboardRoutingModule { }
