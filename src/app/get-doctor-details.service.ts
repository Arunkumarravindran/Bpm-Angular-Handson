import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDoctorDetailsService {
  private_url:string="https://api.myjson.com/bins/9rl34";

  constructor(private http:HttpClient) { }
  getDoctorDetails()
  {
    return this.http.get(this.private_url);
  }
}
 