import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadNavComponent } from '../layout/head-nav/head-nav.component';
import { SideNavComponent } from '../layout/side-nav/side-nav.component';
import { MenuListItemComponent } from '../layout/menu-list-item/menu-list-item.component';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  declarations: [
    HeadNavComponent,
    SideNavComponent,
    MenuListItemComponent,
  ],
  exports: [
    HeadNavComponent,
    SideNavComponent,
    MenuListItemComponent,
  ],
  entryComponents: [
  ],
})
export class LayoutModule { }
