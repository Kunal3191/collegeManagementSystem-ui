import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeacherComponent } from './teacher.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeacherRoutingModule } from './teacher-routing.module';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        LayoutModule,
        TeacherRoutingModule
    ],
    exports: [
        LayoutModule,
        TeacherComponent,
        TeacherDetailsComponent
    ],
    declarations: [
        TeacherComponent,
        TeacherDetailsComponent
    ],
    entryComponents: [
    ]
})
export class TeacherModule { }
