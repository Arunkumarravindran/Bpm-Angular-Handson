import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LinkInsuranceComponent} from '../link-insurance/link-insurance.component'
@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit() {
  }

  openInsurance(): void {
    const dialogRef = this.dialog.open(LinkInsuranceComponent, {
      width: '23%',
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
