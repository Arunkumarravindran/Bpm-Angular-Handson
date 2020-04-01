import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { GetDoctorDetailsService } from "src/app/get-doctor-details.service";

@Component({
  selector: "app-details_Table",
  templateUrl: "./details_Table.component.html",
  styleUrls: ["./details_Table.component.css"]
})
export class Details_TableComponent implements OnInit {
  searchText: string;

  doctorDetails: object;
  closeResult = "";
  genders$ = [{ name: "Male" }, { name: "Female" }, { name: "Others" }];
  specialities$ = [
    { name: "Cardiologist" },
    { name: "Gynecology" },
    { name: "Children health" },
    { name: "Diabetologist" },
    { name: "Dietician" },
    { name: "Female" },
    { name: "Neurology" },
    { name: "Nephrology" },
    { name: "Psychiatry" },
    { name: "Vascular Surgery" }
  ];
  constructor(
    private getDoctorDetailsService: GetDoctorDetailsService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getDoctorDetailsService.getDoctorDetails().subscribe(data => {
      this.doctorDetails = data;
      console.log(this.doctorDetails);
    });
  }

  searchPoduct(data) {
    this.searchText = data;
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }
  save(temp) {
    console.log("Form Values :", temp);
  }
}
