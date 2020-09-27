import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from '../student/student.component';
import { CourseListComponent } from '../student/course/course-list/course-list.component';
import { CourseComponent } from '../student/course/course.component';
import { DashboardRoutingModule } from './dashboard-routing.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MenuListItemComponent } from 'src/app/layout/menu-list-item/menu-list-item.component';
import { SideNavComponent } from 'src/app/layout/side-nav/side-nav.component';
import { HeadNavComponent } from 'src/app/layout/head-nav/head-nav.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    LayoutModule
  ],
  exports: [
    LayoutModule,
    StudentComponent,
    CourseListComponent,
    CourseComponent,
  ],
  declarations: [
    StudentComponent,
    CourseListComponent,
    CourseComponent,
    DashboardComponent
  ],
  entryComponents: [
  ]
})
export class DashboardModule { }
