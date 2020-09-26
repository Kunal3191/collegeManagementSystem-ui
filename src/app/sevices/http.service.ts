import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HttpService {

    constructor(private http: HttpClient) { }

    url: string = "http://localhost:8080/";
    getData(userName, password) {

        let params = new HttpParams();

        params = params.append('email', userName);
        params = params.append('password', password);

        return this.http.get(this.url + 'login', {params: params} );
        //    return this.http.get('../assets/data.json');
    }

    saveStudent(studentDetails){
        return this.http.post(this.url + 'signup', studentDetails);
    }
}