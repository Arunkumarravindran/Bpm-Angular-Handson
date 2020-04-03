import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Router} from '@angular/router';
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
  doctorDetails: object;
  constructor(
    private getDoctorDetailsService: GetDoctorDetailsService,
    private modalService: NgbModal,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getDoctorDetailsService.getDoctorDetails().subscribe(data => {
      this.doctorDetails = data;
      console.log(this.doctorDetails);
    });
  }

  openDocterTable()
  {
     this.doctorTable = false;
     this.pharmacyTable = true;
  }
  openPhamacyTable(){
    this.doctorTable = true;
    this.pharmacyTable = false;
  }
  
  searchPoduct(data) {
    this.searchText = data;
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }

  openUpdate(updateForm , id){
    this.getDoctorDetailsService.setUpdateId(id);
    this.modalService.open(updateForm, { ariaLabelledBy: "modal-basic-title" });
  }
  
}
