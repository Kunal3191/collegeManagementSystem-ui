import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from '../student/course/course-details/course-details.component';
import { CourseListComponent } from '../student/course/course-list/course-list.component';
import { CourseComponent } from '../student/course/course.component';
import { StudentComponent } from '../student/student.component';
import { DashboardComponent } from './dashboard.component';

const studentRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent, children: [
            // { path: '', component: StudentComponent },
            // { path: 'course-list', component: CourseListComponent}
        ]
    },
    
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
