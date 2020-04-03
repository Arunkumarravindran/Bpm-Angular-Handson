import { Component, OnInit } from '@angular/core';
import { GetDoctorDetailsService } from "src/app/get-doctor-details.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-update_doctorDetails',
  templateUrl: './update_doctorDetails.component.html',
  styleUrls: ['./update_doctorDetails.component.css']
})
export class Update_doctorDetailsComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  error: string;
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
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      specialization: ["", Validators.required],
      gender: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      mobileNo: ["", [Validators.required, Validators.minLength(10)]],
      dateOfBirth: ["", [Validators.required]],
      practiceSince: ["", [Validators.required]],
      city: ["", [Validators.required]]
    });
  }
  get forms() {
    return this.registerForm.controls;
  }
  openUpdatemodal(){
    
  }
  update(formValues) {
    // console.log("Details table :", formValues);
    this.submitted = true;
    //validation check
    if (this.registerForm.invalid) {
      console.log("invalid form");
      return;
    }
    //any post call link..
    this.getDoctorDetailsService.updateDoctor(formValues).subscribe(
      data => {
        if (data == "success") {
          console.log("update works");
          this.close(formValues);
        }
      },
      error => {
        this.error = error.message;
      }
    );
  }
  close(content) {
    this.modalService.dismissAll(content);
  }
}
