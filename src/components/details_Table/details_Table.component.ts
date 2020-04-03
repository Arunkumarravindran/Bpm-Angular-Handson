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
  getId(e){
console.log(e)
  }
}
