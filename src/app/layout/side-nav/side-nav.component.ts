import { Component, OnInit, ViewChild } from '@angular/core';
import { NavItem } from '../menu-list-item/menu-list-item.component';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpService } from 'src/app/sevices/http.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent implements OnInit {

  @ViewChild('sideNav') public sideNav: MatSidenav;
  navItems: NavItem[] = [];

  constructor(private httpService: HttpService
  ) { }

  ngOnInit() {
    try {
      console.log("sidenav")
      // this.getModulesList();
      this.getMenu();
      // this.sidenavService.setSidenav(this.sideNav);
    } catch (e) {
      console.log("error", e);
    }
  }

  getMenu() {
    try {

      // //console.log('getMenu called');
      this.httpService.getMenu().then(result => {
        console.log("result", result);
        let results: NavItem[];
        results = result;

        this.setMenu(results);

      }).catch(error => {
      });
    } catch (e) {
      console.log("error", e);
    }
  }

  childData: any = [];
  setMenu(results: any) {
    try {

      console.log('results', results);
      this.navItems = results;

    } catch (e) {
      console.log("error", e);
    }
  }
}
