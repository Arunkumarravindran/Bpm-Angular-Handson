import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-link-insurance',
  templateUrl: './link-insurance.component.html',
  styleUrls: ['./link-insurance.component.css']
})
export class LinkInsuranceComponent implements OnInit {

  linkInsuranceForm: FormGroup
  memberValue :string;
  amountValue :string;
  insurerValue :string;
  planValue :string;
  cardValue :string;
  zipCodeValue :string;
  success: boolean;
  linkForm : boolean;

  members: any[] = [
    {value: 'Self', viewValue: 'Self'},
    {value: 'Mother', viewValue: 'Mother'},
    {value: 'Father', viewValue: 'Father'}
  ];

  insurers: any[] = [
    {value: 'United Health Care', viewValue: 'United Health Care'},
    {value: 'Star Health Care', viewValue: 'Star Health Care'}
  ];

  plans: any[] = [
    {value: 'Medicare & MedicId', viewValue: 'Medicare & MedicId'},
    {value: 'Medicare & MedicId', viewValue: 'Medicare & MedicId'}
  ];


  constructor(private formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<LinkInsuranceComponent>) { }

  ngOnInit() {
  this.success = true
  this.linkForm = false
  this.linkInsuranceForm = new FormGroup({
    member: new FormControl('', [
      Validators.required
    ]),
    insurer: new FormControl('', [
      Validators.required
    ]),
    plan: new FormControl('', [
      Validators.required
    ]),
    amount: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(7)
    ]),
    zipcode: new FormControl('', [
      Validators.required,
    ]),
    cardDetails: new FormControl('', [
      Validators.required,
    ]),
  });

}


onSubmit(){
  console.log("form values")
  this.success =  false
  this.linkForm = true
  
  // this.etservice.addBudget(json).subscribe((response=>
  //   {
  //     if(response == 'success'){
  //       this.dialogRef.close();
  //     }
  //   }))
 
}
close(){
  console.log("closwedd")
  this.dialogRef.close();
}

link(){
  this.success =  false
  this.linkForm = true
}
}


