import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CourseListComponent } from './views/student/course/course-list/course-list.component';


const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'course/:id', loadChildren: () => import(`./views/student/course/course.module`).then(m => m.CourseModule) },
  // { path: 'student', loadChildren: () => import(`./views/student/student.module`).then(m => m.StudentModule)  },
  { path: 'course-list', component: CourseListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
