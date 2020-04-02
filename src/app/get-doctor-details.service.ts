import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GetDoctorDetailsService {
  private_url: string = "https://api.myjson.com/bins/kt8o8";
  saveDoctorUrl: string = "https://api.myjson.com/bins";

  constructor(private http: HttpClient) {}
  getDoctorDetails() {
    return this.http.get(this.private_url);
  }
  saveDoctor(data) {
    console.log("Save Doctor :", data);
    this.http.post(this.saveDoctorUrl, data);
  }
}
