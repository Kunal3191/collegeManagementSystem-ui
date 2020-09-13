import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  profession: string;
  professionValue: string[] = ['Admin', 'Teacher', 'Student'];

  constructor(private snackbar: MatSnackBar, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(username, password, profession){
    console.log(username, password);
    console.log(profession);
    // let result = this.people.filter((res: any) => {
    //   if(res.name.toLowerCase() == username.toLowerCase() && res.birth_year.toLowerCase() == password.toLowerCase()){
    //     return res;
    //   }
    // })
    // if(result.length > 0){
      this.router.navigate(['dashboard']);
    // }else{
    //   this.snackbar.open('Username and Password is incorrect','', {duration: 2000});
    // }
  }

}
