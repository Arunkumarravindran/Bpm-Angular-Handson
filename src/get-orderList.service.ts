import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, from } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetOrderListService {

  patientOrderList: string = "http://localhost:3000/patientOrderList";
  updateId : Number;

  constructor(private http: HttpClient) {}

  getPatientOrderList() {
    return this.http.get(this.patientOrderList);
  }


handleError(error: HttpErrorResponse) {
  console.log("Error Handling Works");
  return throwError(error);
  }
  
}
