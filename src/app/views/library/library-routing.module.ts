import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryDetailsComponent } from './library-details/library-details.component';
import { LibraryComponent } from './library.component';

const libraryRoutes: Routes = [
    { path: '', component: LibraryComponent, children: [
        { path: 'library-details', component: LibraryDetailsComponent},
    ]},
]

@NgModule({
    imports: [
        RouterModule.forChild(libraryRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LibraryRoutingModule { }
