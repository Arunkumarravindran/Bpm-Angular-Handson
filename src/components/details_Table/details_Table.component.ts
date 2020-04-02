import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { GetDoctorDetailsService } from "src/app/get-doctor-details.service";

@Component({
  selector: "app-details_Table",
  templateUrl: "./details_Table.component.html",
  styleUrls: ["./details_Table.component.css"]
})
export class Details_TableComponent implements OnInit {
  searchText: string;

  doctorDetails: object;
  registerForm: FormGroup;
  submitted = false;
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
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getDoctorDetailsService.getDoctorDetails().subscribe(data => {
      this.doctorDetails = data;
      console.log(this.doctorDetails);
    });
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      speciality: ["", Validators.required],
      gender: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      mobileNumber: ["", [Validators.required, Validators.minLength(10)]],
      dateOfBirth: ["", [Validators.required]],
      practiceSince: ["", [Validators.required]],
      address: ["", [Validators.required]]
    });
  }

  searchPoduct(data) {
    this.searchText = data;
  }
  get forms() {
    return this.registerForm.controls;
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }
  save(formValues) {
    // console.log("Details table :", formValues);
    this.submitted = true;
    //validation check
    if (this.registerForm.invalid) {
      console.log("invalid form");
      return;
    }
    //any post call link..
    this.getDoctorDetailsService.saveDoctor(formValues);
    this.close(formValues);
  }
  close(content) {
    this.modalService.dismissAll(content);
  }
}
