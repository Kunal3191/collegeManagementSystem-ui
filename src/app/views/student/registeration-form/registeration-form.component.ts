import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  branchs: string[] = [ "Computer Science", "Electronics", "Electrical", "Mechanical" ];

  constructor(private formBuilder: FormBuilder, public MatDialogRef: MatDialogRef<RegisterationFormComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      if (data) {
        this.dialogData = data.dialogData;
        this.registerationObj = data.dialogData
      }
    }

  ngOnInit(): void {
    this.resetRegisterationForm();
    this.bindRegisterationFrom();
  }

  resetRegisterationForm() {
    this.registerationObj = {
      _id: null,
      studentFirstName: null,
      studentMiddleName: null,
      studentLastName: null,
      gender: null,
      fatherName: null,
      motherName: null,
      branch: null,
      address: null,

    }
  }

  bindRegisterationFrom() {
    this.registerationForm = this.formBuilder.group({
      _id: [this.registerationObj._id],
      studentFirstName: [this.registerationObj.studentFirstName],
      studentMiddleName: [this.registerationObj.studentMiddleName],
      studentLastName: [this.registerationObj.studentLastName],
      gender: [this.registerationObj.gender],
      fatherName: [this.registerationObj.fatherName],
      motherName: [this.registerationObj.motherName],
      branch: [this.registerationObj.branch],
      address: [this.registerationObj.address],
    })
  }

}
