import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError, from } from "rxjs";
import { map, catchError, retry } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class GetDoctorDetailsService {
  doctor_Url: string = "http://localhost:3000/doctorList";
  pharmacy_Url: string = "http://localhost:3000/pharmacyList";
  updateId: Number;

  constructor(private http: HttpClient) {}
  getDoctorDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.doctor_Url);
  }
  getPharmacyDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.pharmacy_Url);
  }
  deletePharmacyDetails(deleteId:number):Observable<any[]>
  {
    console.log("inside delete service method", deleteId)
    return this.http.delete<any>(this.pharmacy_Url+ "/" + deleteId);
  }
  saveDoctor(data) {
    return this.http.post(this.doctor_Url, data).pipe(
      retry(2),
      catchError(this.handleError),
      map(responseBody => {
        return "success";
      })
    );
  }

  savePharmachy(data) {
    console.log("get doc serv : pharmachy", data);
    return this.http.post(this.pharmacy_Url, data).pipe(
      retry(2),
      catchError(this.handleError),
      map(responseBody => {
        return "success";
      })
    );
  }

  setUpdateId(id) {
    this.updateId = id;
  }
  
  updateDoctor(data) {
    console.log("show update id", this.updateId);
    return this.http.patch(this.doctor_Url + "/" + this.updateId, data).pipe(
      retry(2),
      catchError(this.handleError),
      map(responseBody => {
        return "success";
      })
    );
  }

  updatePharmachy(data) {
    console.log("show update id", this.updateId);
    return this.http
      .patch(this.pharmacy_Url + "/" + this.updateId, data)
      .pipe(
        retry(2),
        catchError(this.handleError),
        map(responseBody => {
          return "success";
        })
      );
  }

  handleError(error: HttpErrorResponse) {
    console.log("Error Handling Works");
    return throwError(error);
  }
}
