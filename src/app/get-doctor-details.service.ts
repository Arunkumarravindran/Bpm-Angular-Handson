import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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
    this.id = Math.floor(10+ Math.random()*90);
  let saveJson = {
    id: this.id,
    firstName: data.firstName,
    lastName: data.lastName,
    mobileNo: data.mobileNumber,
    email: data.firstName,
    gender: data.gender,
    practiceSince: " ",
    specialization: data.speciality,
    city: data.address
  }

    console.log("Save Doctor :", saveJson);
    this.http.post(this.saveDoctorUrl, saveJson);
  }
}
