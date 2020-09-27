import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonService } from './sevices/common.service';
import { RegisterationFormComponent } from './views/student/registeration-form/registeration-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CollegeMgnSystem';
  routerUrl: string = '';
  loginData;
  @ViewChild('drawer') drawer:any;

  constructor(private router: Router, private MatDialog: MatDialog, private commonService: CommonService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe(event => {
        this.routerUrl = event['url'].replace (/\//g, "");
        console.log("url", this.routerUrl);
      });
      console.log("url", this.routerUrl);
  }
  ngOnInit() {
    console.log("url", this.routerUrl);
    this.commonService.loginDetails.subscribe(val => {
      console.log("details", val);
      this.loginData = val[0];
    })
  }

  onRegister(){
    try {
      const objMatDialogConfig = new MatDialogConfig();
      objMatDialogConfig.panelClass = "dialog-md";

      let item = {
        headerText: "Add Student",
      };

      objMatDialogConfig.data = {
        dialogData: item
      };

      let refMatDialog = this.MatDialog.open(
        RegisterationFormComponent,
        objMatDialogConfig
      );

      var actionResult: boolean = false;

      refMatDialog.afterClosed().subscribe(value => {
        actionResult = value;
        if (value) {

        } else {
        }
      });
    } catch (e) {
      
    }
  }

}
