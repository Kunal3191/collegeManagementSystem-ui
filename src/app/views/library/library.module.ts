import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryDetailsComponent } from './library-details/library-details.component';
import { LibraryComponent } from './library.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        LayoutModule,
        LibraryRoutingModule
    ],
    exports: [
        LayoutModule,
        LibraryComponent,
        LibraryDetailsComponent
    ],
    declarations: [
        LibraryComponent,
        LibraryDetailsComponent
    ],
    entryComponents: [
    ]
})
export class LibraryModule { }
