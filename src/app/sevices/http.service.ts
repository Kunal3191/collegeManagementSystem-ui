import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpService {

    constructor(private http: HttpClient) { }

    url: string = "http://localhost:8080/";
    getData(userName, password) {

        let params = new HttpParams();

        params = params.append('email', userName);
        params = params.append('password', password);

        // return this.http.get(this.url + 'login', {params: params} );
           return this.http.get('../assets/data.json');
    }

    saveStudent(studentDetails){
        return this.http.post(this.url + 'signup', studentDetails);
    }

    getMenu(): Promise<any> {
        //debugger;
        return this.http
          .get('./assets/data/menu.json')
          .toPromise()
          .then(this.extractData)
          .catch(this.handleError);
      }

      private extractData(res: Response) {
        return res;
      }
    
      // private handleError(error: any): Promise<any> {
      //   //console.log('An error occurred', error);
      //   return Promise.reject(error.message || error);
      // }
    
      handleError(error) {
        //console.log("error", error);
        let errorMessage = '';
        if (error instanceof HttpErrorResponse) {
          // client-side error
          // this.spinnerService.hide();
          errorMessage = `Error: ${error.status} ${error.statusText}`;
        } else {
          // server-side error
        //   this.spinnerService.hide();
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.statusText}`;
        }
        // window.alert(errorMessage);
        return throwError(errorMessage);
      }
}