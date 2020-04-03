import { Injectable } from "@angular/core";
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, from } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: "root"
})
export class GetDoctorDetailsService {

private_url:string="http://localhost:3000/doctorList";
  saveDoctorUrl: string = "http://localhost:3000/doctorList";
  id : Number;

  constructor(private http: HttpClient) {}
  getDoctorDetails() {
    return this.http.get(this.private_url);
  }
  saveDoctor(data) {
    return this.http.post(this.saveDoctorUrl, data).pipe(retry(2),
    catchError(this.handleError)
    , map(responseBody => { 
        return "success";
      }));
}

updateDoctor(data) {
  return this.http.put(this.saveDoctorUrl, data).pipe(retry(2),
  catchError(this.handleError)
  , map(responseBody => { 
      return "success";
    }));
}
handleError(error: HttpErrorResponse) {
console.log("Error Handling Works");
return throwError(error);
}
}
