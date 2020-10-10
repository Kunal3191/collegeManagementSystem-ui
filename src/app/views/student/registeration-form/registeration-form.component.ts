import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/app/sevices/http.service';
import { dateFormatValidator } from 'src/app/shared/validators/endDate.validator';

@Component({
  selector: 'app-registeration-form',
  templateUrl: './registeration-form.component.html',
  styleUrls: ['./registeration-form.component.css']
})
export class RegisterationFormComponent implements OnInit {

  registerationForm: FormGroup;
  dialogData: any;
  registerationObj: any;
  genders: string[] = ["Male", "Female"];
  branchs: string[] = ["Computer Science", "Electronics", "Electrical", "Mechanical"];

  constructor(private formBuilder: FormBuilder, public MatDialogRef: MatDialogRef<RegisterationFormComponent>,
    @Inject(MAT_DIALOG_DATA) data, private httpService: HttpService) {
    if (data) {
      this.dialogData = data.dialogData;
      console.log(data.dialogData);
      this.registerationObj = data.dialogData.studentData
    }
  }

  ngOnInit(): void {
    if (!this.registerationObj) {
      this.resetRegisterationForm();
    }
    this.bindRegisterationFrom();
  }

  resetRegisterationForm() {
    this.registerationObj = {
      id: null,
      firstName: null,
      studentMiddleName: null,
      lastName: null,
      gender: null,
      fatherName: null,
      motherName: null,
      branch: null,
      address: null,
      email: null,
      password: null,
      active: null,
      dob: null
    }
  }

  bindRegisterationFrom() {
    this.registerationForm = this.formBuilder.group({
      id: [this.registerationObj.id],
      firstName: [this.registerationObj.firstName],
      studentMiddleName: [this.registerationObj.studentMiddleName],
      lastName: [this.registerationObj.lastName],
      gender: [this.registerationObj.gender],
      fatherName: [this.registerationObj.fatherName],
      motherName: [this.registerationObj.motherName],
      branch: [this.registerationObj.branch],
      address: [this.registerationObj.address],
      email: [this.registerationObj.email],
      password: [this.registerationObj.password],
      active: [this.registerationObj.active],
      dob: [this.registerationObj.dob, [dateFormatValidator]]
    })
  }

  validateDateFormat(wrongDateFormat: boolean) {
    if (wrongDateFormat)
    console.log('Incorrect date format');
      // this.toastr.error("Incorrect Date Format");
      // this.snackbar.open("Incorrect Date Format", 'close', 'red-snackbar');
  }

  saveDetails() {
    console.log("details", this.registerationForm.value);
    this.httpService.saveStudent(this.registerationForm.value).subscribe(res => {
      console.log(res);
    });
  }

}
