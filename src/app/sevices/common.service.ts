import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CommonService {
    
    loginDetails: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(){}

    logDetails(data){
        this.loginDetails.next(data);
    }
}