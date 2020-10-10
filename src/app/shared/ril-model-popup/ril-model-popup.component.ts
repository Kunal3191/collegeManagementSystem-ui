import { Component, OnInit, inject, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ril-model-popup',
  templateUrl: './ril-model-popup.component.html',
  styleUrls: ['./ril-model-popup.component.css']
})
export class RilModelPopupComponent implements OnInit {

  public dialogHeader = "";
  public dialogHeaderIcon = "";
  public dialogMessage = "";
  public dialogPositiveBtn = "Yes";
  public dialogNegativeBtn = "No";
  public dialogPositiveBtnIcon = "done";
  public dialogNegativeBtnIcon = "cancel";
  public functionName = "";
  public showInputField;
  public inputFieldValue = "";


  constructor(public MatDialogRef: MatDialogRef<RilModelPopupComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.dialogHeader = data.dialogHeader;
    this.showInputField = data.showInputField;
    this.inputFieldValue = data.inputFieldValue;
    this.dialogHeaderIcon = data.dialogHeaderIcon;
    this.dialogMessage = data.dialogMessage;
    this.dialogPositiveBtn = data.dialogPositiveBtn;
    this.dialogNegativeBtn = data.dialogNegativeBtn;
    this.dialogPositiveBtnIcon = data.dialogPositiveBtnIcon;
    this.dialogNegativeBtnIcon = data.dialogNegativeBtnIcon;
    this.functionName = data.functionName;

    this.postitiveRes = {
      boolProperty: true,
      name: ''
    }
  }

  postitiveRes: any
  public onPositiveBtn() {
    this.postitiveRes.boolProperty = true;
    this.postitiveRes.name = this.inputFieldValue;
    this.MatDialogRef.close(this.postitiveRes);
  }

  public onNegativeBtn() {
    ////console.log("abc");
    this.MatDialogRef.close(false);
    ////console.log("abc1");
  }

  ngOnInit() {
    //console.log('this is a test' , this.showInputField)
  }

}
