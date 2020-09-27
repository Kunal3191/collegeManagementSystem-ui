import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/sevices/common.service';
import { HttpService } from 'src/app/sevices/http.service';

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
  userDetails: any;

  constructor(private snackbar: MatSnackBar, private route: ActivatedRoute, private router: Router,
    private commonService: CommonService, private httpService: HttpService) { }

  ngOnInit(): void {
    // this.httpService.getData().subscribe((res: any) => {
    //   console.log("value", res)
    //   this.userDetails = res.userDetails;
    // })
  }

  onLogin(username, password, profession) {
    console.log(username, password);
    console.log(profession);

    this.httpService.getData(username, password).subscribe((user) => {
      console.log(user);
      // this.userDetails = user;
      this.commonService.logDetails(user);

      if (user['email']) {
        this.router.navigate(['dashboard']);
      } else {
        this.snackbar.open('Username and Password is incorrect', '', { duration: 2000 });
      }
    })

    // this.httpService.getData(username, password).subscribe((user : any) => {
    //   this.userDetails = user.userDetails;
    //   console.log(user)
    //   // this.commonService.logDetails(user);

    //   let result = user.userDetails.filter((res: any) => {
    //     if(res.userName.toLowerCase() == username.toLowerCase()){
    //       return res;
    //     }
    //   })
  
    //   this.commonService.logDetails(result);
  
    //   if(result.length > 0){
    //     this.router.navigate(['dashboard']);
    //   }else{
    //     this.snackbar.open('Username and Password is incorrect','', {duration: 2000});
    //   }

      
    // })

    // let data = {
    //   username,
    //   password,
    //   profession
    // }



  }

}
