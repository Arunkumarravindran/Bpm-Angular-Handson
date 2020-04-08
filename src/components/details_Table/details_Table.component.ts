import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { GetDoctorDetailsService } from "src/app/get-doctor-details.service";

@Component({
  selector: "app-details_Table",
  templateUrl: "./details_Table.component.html",
  styleUrls: ["./details_Table.component.css"]
})
export class Details_TableComponent implements OnInit {
  searchText: string;
  doctorTable = false;
  pharmacyTable = true;
  doctorDetails: any[];
  totalRecords: number;
  page: Number = 1;
  data: Array<any>;
  constructor(
    private getDoctorDetailsService: GetDoctorDetailsService,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.data = new Array<any>();
  }

  ngOnInit() {
    this.getDoctorDetailsService.getDoctorDetails().subscribe(data => {
      this.doctorDetails = data;
      console.log(this.doctorDetails);
      this.totalRecords = this.doctorDetails.length;
    });
  }

  openDocterTable() {
    this.doctorTable = false;
    this.pharmacyTable = true;
  }
  openPhamacyTable() {
    this.doctorTable = true;
    this.pharmacyTable = false;
  }

  searchPoduct(data) {
    this.searchText = data;
  }

  open(content) {
    // this.openDocterTable;
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }

  openPharmachy(pharmachy) {
    this.modalService.open(pharmachy, { ariaLabelledBy: "modal-basic-title" });
  }

  openUpdate(updateForm, id) {
    this.getDoctorDetailsService.setUpdateId(id);
    this.modalService.open(updateForm, { ariaLabelledBy: "modal-basic-title" });
  }
}
