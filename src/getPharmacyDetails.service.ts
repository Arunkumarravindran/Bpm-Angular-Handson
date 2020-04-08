import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { map, catchError, retry } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GetPharmacyDetailsService {
  savePharmacyUrl: string = "http://localhost:3000/pharmacyList";

  constructor(private http: HttpClient) {}
  savePharmachy(data) {
    return this.http.post(this.savePharmacyUrl, data).pipe(
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
