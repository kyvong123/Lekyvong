import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import { map } from 'rxjs/operators';
import {Employee} from './manage-candidate.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import 'rxjs/add/operator/map';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';



@Injectable({
  providedIn: 'root'
})




export class EmployeeService {
  selectedEmployee:Employee;
  employeeList: Employee[];
  constructor(private http:Http) { }



  postEmployee(emp : Employee){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method:RequestMethod.Post, headers:headerOptions});
    return this.http.post('http://5b228d36b968350014dd0012.mockapi.io/api/employee',body,requestOptions).pipe(map(x=>x.json()));
  }
  putEmployee(id, emp){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method:RequestMethod.Put, headers:headerOptions});
    return this.http.put('http://5b228d36b968350014dd0012.mockapi.io/api/employee/' + id,
     body, 
     requestOptions).pipe(map(res=>res.json()));
  }

  getEmployeeList(){
    this.http.get('http://5b228d36b968350014dd0012.mockapi.io/api/employee')
    .pipe(map(
            (data: Response)=>{return data.json() as Employee[];}
        )).toPromise().then(
                    x=>{this.employeeList = x;}
        )
  }
  deleteEmployee(id: number){
    return this.http.delete('http://5b228d36b968350014dd0012.mockapi.io/api/employee/' + id).pipe(map(res=>res.json()));
  }
}







/*
export interface ManageCandidate {
    heroesUrl: string;
    textfile: string;
  }
@Injectable()
export class ManageCandidateService {
    ManageCandidateUrl = 'assets/managecandidate.json';
  
    constructor(private http: HttpClient) { }
    b:string;
    getManageCandidate() {
      return this.http.get<ManageCandidate>(this.ManageCandidateUrl)
        .pipe(
          retry(3), // retry a failed request up to 3 times
          catchError(this.handleError) // then handle the error
        );
      
    }

    getManageCandidate_1() {
        return this.http.get(this.ManageCandidateUrl);
      }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      };
    }*/


