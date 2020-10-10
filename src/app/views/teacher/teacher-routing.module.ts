import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeacherComponent } from './teacher.component';

const teacherRoutes: Routes = [
    { path: '', component: TeacherComponent, children: [
        { path: 'teacher-details', component: TeacherDetailsComponent},
    ]},
]

@NgModule({
    imports: [
        RouterModule.forChild(teacherRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TeacherRoutingModule { }
