import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RilModelPopupComponent } from 'src/app/shared/ril-model-popup/ril-model-popup.component';
import { RegisterationFormComponent } from '../registeration-form/registeration-form.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  displayedColumns: string[] = ['studentId', 'name', 'dob', 'action'];
  studentDataSource;
  _objMatDialogConfig = new MatDialogConfig();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  studentData = [
    { firstName: 'Kunal', lastName: "Kumar", dob: "10/10/2020", id: 2 },
    { firstName: 'Anurag', lastName: "Yadavoo", dob: "10/10/2020", id: 3 },
    { firstName: 'Mayank', lastName: "Bhushan", dob: "10/10/2020", id: 1 },
    { firstName: 'Shahbaz', lastName: "Alam", dob: "10/10/2020", id: 4 },

  ]

  constructor(private MatDialog: MatDialog) { }

  ngOnInit(): void {
    this.studentDataSource = new MatTableDataSource(this.studentData);
  }

  ngAfterViewInit() {
    this.studentDataSource.paginator = this.paginator;
    this.studentDataSource.sort = this.sort;
  }

  onRowEdit(row) {
    try {
      const objMatDialogConfig = new MatDialogConfig();
      objMatDialogConfig.panelClass = "dialog-md";

      let item = {
        headerText: "Edit Student",
        studentData: row
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
        dialogMessage: "Do you want to delete this Student.?",
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
          let finalStudentData = this.studentData.filter(student => student.id != id);
          this.studentData = finalStudentData;
          console.log(id)
          console.log(finalStudentData);
          this.studentDataSource = new MatTableDataSource(finalStudentData);
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.studentDataSource.filter = filterValue.trim().toLowerCase();

    if (this.studentDataSource.paginator) {
      this.studentDataSource.paginator.firstPage();
    }
  }

}
