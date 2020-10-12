import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RilModelPopupComponent } from 'src/app/shared/ril-model-popup/ril-model-popup.component';
import { RegisterationFormComponent } from '../../student/registeration-form/registeration-form.component';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {
  displayedColumns: string[] = ['teacherId', 'name', 'dob', 'action'];
  teacherDataSource;
  _objMatDialogConfig = new MatDialogConfig();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  teacherData = [
    { firstName: 'Kunal', lastName: "Kumar", dob: "10/10/2020", id: 2 },
    { firstName: 'Anurag', lastName: "Yadavoo", dob: "10/10/2020", id: 3 },
    { firstName: 'Mayank', lastName: "Bhushan", dob: "10/10/2020", id: 1 },
    { firstName: 'Shahbaz', lastName: "Alam", dob: "10/10/2020", id: 4 },

  ]

  constructor(private MatDialog: MatDialog) { }

  ngOnInit(): void {
    this.teacherDataSource = new MatTableDataSource(this.teacherData);
  }

  ngAfterViewInit() {
    this.teacherDataSource.paginator = this.paginator;
    this.teacherDataSource.sort = this.sort;
  }

  onRowEdit(row) {
    try {
      const objMatDialogConfig = new MatDialogConfig();
      objMatDialogConfig.panelClass = "dialog-md";

      let item = {
        headerText: "Edit Teacher",
        data: row
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

  onRowDelete(id) {
    try {
      this._objMatDialogConfig.data = {
        dialogHeader: "Confirm",
        dialogMessage: "Do you want to delete this Teacher.?",
        dialogPositiveBtn: "Yes",
        dialogNegativeBtn: "No",
        dialogPositiveBtnIcon: "done",
        dialogNegativeBtnIcon: "cancel",
        dialogHeaderIcon: "done"
      };
      this._objMatDialogConfig.panelClass = "dialog-sm";

      let refMatDialog = this.MatDialog.open(RilModelPopupComponent, this._objMatDialogConfig);

      refMatDialog.afterClosed().subscribe((value) => {
        if (value) {
          let finalteacherData = this.teacherData.filter(teacher => teacher.id != id);
          this.teacherData = finalteacherData;
          console.log(id)
          console.log(finalteacherData);
          this.teacherDataSource = new MatTableDataSource(finalteacherData);
        }
      })

    } catch (e) {
      // this.snackbar.open(e.message, 'close', 'red-snackbar');
    }
  }

  onRegister() {
    try {
      const objMatDialogConfig = new MatDialogConfig();
      objMatDialogConfig.panelClass = "dialog-md";

      let item = {
        headerText: "Add Teacher",
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.teacherDataSource.filter = filterValue.trim().toLowerCase();

    if (this.teacherDataSource.paginator) {
      this.teacherDataSource.paginator.firstPage();
    }
  }
  

}
