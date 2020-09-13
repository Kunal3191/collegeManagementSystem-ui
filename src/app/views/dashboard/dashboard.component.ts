import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/sevices/common.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { RegisterationFormComponent } from '../student/registeration-form/registeration-form.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loginData: any;

  constructor(private commonService: CommonService, private MatDialog: MatDialog) { }

  ngOnInit(): void {
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
