import { AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

//import * as toastr from 'ngx-toastr';

export function endDateValidator(control: AbstractControl): { [key: string]: any } | null {
  const startDate = new Date(control.get('startDate').value);
  const endDate = new Date(control.get('endDate').value)
  // //console.log(startDate.value);
  // //console.log(endDate.value);

  // let check: boolean = false;
  // if (new Date(startDate.value) > new Date(endDate.value)) {
  //     check = true;
  //     //console.log("Invalid EndDate");}

  // //console.log(check);
  return startDate > endDate ?
    { 'wrongEndDate': true } : null;
}


export function dateFormatValidator(control: AbstractControl): { [key: string]: any } | null {
  const startDate = new Date(control.value);
  // //console.log(startDate);
  // //console.log("in Validator", startDate.getFullYear());
  return startDate.getFullYear() < 1000 ?
    { 'wrongDateFormat': true } : null;
}

export function effectiveEndDateValidator(control: AbstractControl): { [key: string]: any } | null {
  const startDate = new Date(control.get('effectiveStartDate').value);
  const endDate = new Date(control.get('effectiveEndDate').value);
  return startDate > endDate ? { 'wrongEndDate': true } : null;
}







