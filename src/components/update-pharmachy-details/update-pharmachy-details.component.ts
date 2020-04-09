import { Component, OnInit } from "@angular/core";
import { GetDoctorDetailsService } from "./../../app/get-doctor-details.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-update-pharmachy-details",
  templateUrl: "./update-pharmachy-details.component.html",
  styleUrls: ["./update-pharmachy-details.component.css"]
})
export class UpdatePharmachyDetailsComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  error: string;

  constructor(
    private getPharmacyDetailsService: GetDoctorDetailsService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      pharmacyName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      mobileNo: ["", [Validators.required, Validators.minLength(10)]],
      city: ["", [Validators.required]],
      zipCode: ["", [Validators.required, Validators.minLength(6)]],
      address: ["", [Validators.required]]
    });
  }
  get forms() {
    return this.registerForm.controls;
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
  }
  update(formValues) {
    console.log("Pharmachy details form :", formValues);
    this.submitted = true;
    //validation check
    if (this.registerForm.invalid) {
      console.log("invalid form");
      return;
    }
    //any post call link..
    this.getPharmacyDetailsService.updatePharmachy(formValues).subscribe(
      data => {
        if (data == "success") {
          console.log("router works");
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
