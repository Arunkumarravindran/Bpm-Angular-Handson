import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError, from } from "rxjs";
import { map, catchError, retry } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class GetDoctorDetailsService {
  private_url: string = "http://localhost:3000/doctorList";
  saveDoctorUrl: string = "http://localhost:3000/doctorList";
  savePharmacyUrl: string = "http://localhost:3000/pharmacyList";

  updateId: Number;
  private_url1: string = "http://localhost:3000/pharmacyList";

  constructor(private http: HttpClient) {}
  getDoctorDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.private_url);
  }
  getPharmacyDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.private_url1);
  }
  saveDoctor(data) {
    return this.http.post(this.saveDoctorUrl, data).pipe(
      retry(2),
      catchError(this.handleError),
      map(responseBody => {
        return "success";
      })
    );
  }

  savePharmachy(data) {
    console.log("get doc serv : pharmachy", data);
    return this.http.post(this.savePharmacyUrl, data).pipe(
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
    return this.http.patch(this.saveDoctorUrl + "/" + this.updateId, data).pipe(
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
