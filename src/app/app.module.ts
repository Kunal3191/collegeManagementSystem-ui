import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterationFormComponent } from './views/student/registeration-form/registeration-form.component';
import { StudentComponent } from './views/student/student.component';
import { CourseListComponent } from './views/student/course/course-list/course-list.component';
import { CourseComponent } from './views/student/course/course.component';
import { HeadNavComponent } from './layout/head-nav/head-nav.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { MenuListItemComponent } from './layout/menu-list-item/menu-list-item.component';
import { DashboardModule } from './views/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // DashboardComponent,
    RegisterationFormComponent,
    // StudentComponent,
    // CourseListComponent,
    // CourseComponent,
    // HeadNavComponent,
    // SideNavComponent,
    // MenuListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
