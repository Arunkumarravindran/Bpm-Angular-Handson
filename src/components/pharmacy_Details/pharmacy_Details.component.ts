import { Component, OnInit } from "@angular/core";
import { GetDoctorDetailsService } from "src/app/get-doctor-details.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-pharmacy_Details",
  templateUrl: "./pharmacy_Details.component.html",
  styleUrls: ["./pharmacy_Details.component.css"]
})
export class Pharmacy_DetailsComponent implements OnInit {
  pharmacyDetails: any[];
  totalRecords: number;
  page: Number = 1;
  data: Array<any>;
  constructor(
    private getDoctorDetailsService: GetDoctorDetailsService,
    private modalService: NgbModal
  ) {
    this.data = new Array<any>();
  }

  ngOnInit() {
    this.getDoctorDetailsService.getPharmacyDetails().subscribe(data => {
      this.pharmacyDetails = data;
      console.log(this.pharmacyDetails);
      this.totalRecords = this.pharmacyDetails.length;
    });
  }
  openUpdate(updatePharmachy, id) {
    this.getDoctorDetailsService.setUpdateId(id);
    this.modalService.open(updatePharmachy, {
      ariaLabelledBy: "modal-basic-title"
    });
  }
}
