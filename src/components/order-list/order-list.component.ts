import { Component, OnInit } from "@angular/core";
import { GetOrderListService } from "../../get-orderList.service";

interface Patient {
  id?: number;
  patientOrderKeyNb: number;
  patientKeyNb: number;
  appointmentKeyNb: number;
  clinicKeyNb: number;
  statusKeyNb: number;
  orderStatusKeyNb: number;
  lastModifiedId: number;
  lastModifiedTimeStamp: null;
  insertById: number;
  insertTimeStamp: null;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  emailId: string;
  gender: string;
  appointmentDate: string;
  refill: string;
  orderStatus: string;
  statusName: string;
}
const PATIENTS: Patient[] = [
  {
    patientOrderKeyNb: 999,
    patientKeyNb: 5,
    appointmentKeyNb: 0,
    clinicKeyNb: 0,
    statusKeyNb: 1,
    orderStatusKeyNb: 1,
    lastModifiedId: 0,
    lastModifiedTimeStamp: null,
    insertById: 0,
    insertTimeStamp: null,
    firstName: "Alex",
    lastName: "Mathue",
    mobileNumber: "0174123685",
    emailId: "mathue@gmail.com",
    gender: "M",
    appointmentDate: "12-04-2020",
    refill: "Y",
    orderStatus: "Pending",
    statusName: "Ready to Pick up"
  },
  {
    patientOrderKeyNb: 999,
    patientKeyNb: 5,
    appointmentKeyNb: 0,
    clinicKeyNb: 0,
    statusKeyNb: 1,
    orderStatusKeyNb: 2,
    lastModifiedId: 0,
    lastModifiedTimeStamp: null,
    insertById: 0,
    insertTimeStamp: null,
    firstName: "Deepak",
    lastName: "Shanoy",
    mobileNumber: "95678056789",
    emailId: "deepak@gmail.com",
    gender: "M",
    appointmentDate: "10-12-2020",
    refill: "N",
    orderStatus: "Pending",
    statusName: "Ready to Pick up"
  },
  {
    patientOrderKeyNb: 999,
    patientKeyNb: 5,
    appointmentKeyNb: 0,
    clinicKeyNb: 0,
    statusKeyNb: 1,
    orderStatusKeyNb: 3,
    lastModifiedId: 0,
    lastModifiedTimeStamp: null,
    insertById: 0,
    insertTimeStamp: null,
    firstName: "Rohith",
    lastName: "Srinivas",
    mobileNumber: "8764567899",
    emailId: "rohith@gmail.com",
    gender: "M",
    appointmentDate: "12-06-2020",
    refill: "Y",
    orderStatus: "Completed",
    statusName: "Ready to Pick up"
  },
  {
    patientOrderKeyNb: 999,
    patientKeyNb: 5,
    appointmentKeyNb: 0,
    clinicKeyNb: 0,
    statusKeyNb: 1,
    orderStatusKeyNb: 4,
    lastModifiedId: 0,
    lastModifiedTimeStamp: null,
    insertById: 0,
    insertTimeStamp: null,
    firstName: "Subramaniam",
    lastName: "Goud",
    mobileNumber: "76787735612",
    emailId: "goud@gmail.com",
    gender: "M",
    appointmentDate: "12-04-2020",
    refill: "N",
    orderStatus: "Completed",
    statusName: "Order Picked up"
  },
  {
    patientOrderKeyNb: 999,
    patientKeyNb: 5,
    appointmentKeyNb: 0,
    clinicKeyNb: 0,
    statusKeyNb: 1,
    orderStatusKeyNb: 5,
    lastModifiedId: 0,
    lastModifiedTimeStamp: null,
    insertById: 0,
    insertTimeStamp: null,
    firstName: "Sri",
    lastName: "Devi",
    mobileNumber: "98796876524",
    emailId: "sridevi@gmail.com",
    gender: "F",
    appointmentDate: "02-06-2020",
    refill: "Y",
    orderStatus: "Pending",
    statusName: "Order Recieved"
  },
  {
    patientOrderKeyNb: 999,
    patientKeyNb: 5,
    appointmentKeyNb: 0,
    clinicKeyNb: 0,
    statusKeyNb: 1,
    orderStatusKeyNb: 6,
    lastModifiedId: 0,
    lastModifiedTimeStamp: null,
    insertById: 0,
    insertTimeStamp: null,
    firstName: "Dasaradha",
    lastName: "Naidu",
    mobileNumber: "9876867676",
    emailId: "dasaradha@gmail.com",
    gender: "M",
    appointmentDate: "08-05-2020",
    refill: "Y",
    orderStatus: "Pending",
    statusName: "Ready to Pick up"
  },
  {
    patientOrderKeyNb: 999,
    patientKeyNb: 5,
    appointmentKeyNb: 0,
    clinicKeyNb: 0,
    statusKeyNb: 1,
    orderStatusKeyNb: 7,
    lastModifiedId: 0,
    lastModifiedTimeStamp: null,
    insertById: 0,
    insertTimeStamp: null,
    firstName: "Naga",
    lastName: "Jyothi",
    mobileNumber: "768768754767",
    emailId: "nagajyothi@gmail.com",
    gender: "F",
    appointmentDate: "02-04-2020",
    refill: "Y",
    orderStatus: "Completed",
    statusName: "Order Recieved"
  },
  {
    patientOrderKeyNb: 999,
    patientKeyNb: 5,
    appointmentKeyNb: 0,
    clinicKeyNb: 0,
    statusKeyNb: 1,
    orderStatusKeyNb: 8,
    lastModifiedId: 0,
    lastModifiedTimeStamp: null,
    insertById: 0,
    insertTimeStamp: null,
    firstName: "Manu",
    lastName: "Priya",
    mobileNumber: "6986665675",
    emailId: "manupriya@gmail.com",
    gender: "F",
    appointmentDate: "17-05-2020",
    refill: "Y",
    orderStatus: "Pending",
    statusName: "Ready to Pick up"
  },
  {
    patientOrderKeyNb: 999,
    patientKeyNb: 5,
    appointmentKeyNb: 0,
    clinicKeyNb: 0,
    statusKeyNb: 1,
    orderStatusKeyNb: 1,
    lastModifiedId: 0,
    lastModifiedTimeStamp: null,
    insertById: 0,
    insertTimeStamp: null,
    firstName: "Alex",
    lastName: "Mathue",
    mobileNumber: "0174123685",
    emailId: "mathue@gmail.com",
    gender: "M",
    appointmentDate: "12-04-2020",
    refill: "Y",
    orderStatus: "Pending",
    statusName: "Ready to Pick up"
  },
  {
    patientOrderKeyNb: 999,
    patientKeyNb: 5,
    appointmentKeyNb: 0,
    clinicKeyNb: 0,
    statusKeyNb: 1,
    orderStatusKeyNb: 2,
    lastModifiedId: 0,
    lastModifiedTimeStamp: null,
    insertById: 0,
    insertTimeStamp: null,
    firstName: "Deepak",
    lastName: "Shanoy",
    mobileNumber: "95678056789",
    emailId: "deepak@gmail.com",
    gender: "M",
    appointmentDate: "10-12-2020",
    refill: "N",
    orderStatus: "Pending",
    statusName: "Ready to Pick up"
  },
  {
    patientOrderKeyNb: 999,
    patientKeyNb: 5,
    appointmentKeyNb: 0,
    clinicKeyNb: 0,
    statusKeyNb: 1,
    orderStatusKeyNb: 3,
    lastModifiedId: 0,
    lastModifiedTimeStamp: null,
    insertById: 0,
    insertTimeStamp: null,
    firstName: "Rohith",
    lastName: "Srinivas",
    mobileNumber: "8764567899",
    emailId: "rohith@gmail.com",
    gender: "M",
    appointmentDate: "12-06-2020",
    refill: "Y",
    orderStatus: "Completed",
    statusName: "Ready to Pick up"
  },
  {
    patientOrderKeyNb: 999,
    patientKeyNb: 5,
    appointmentKeyNb: 0,
    clinicKeyNb: 0,
    statusKeyNb: 1,
    orderStatusKeyNb: 4,
    lastModifiedId: 0,
    lastModifiedTimeStamp: null,
    insertById: 0,
    insertTimeStamp: null,
    firstName: "Subramaniam",
    lastName: "Goud",
    mobileNumber: "76787735612",
    emailId: "goud@gmail.com",
    gender: "M",
    appointmentDate: "12-04-2020",
    refill: "N",
    orderStatus: "Completed",
    statusName: "Order Picked up"
  },
  {
    patientOrderKeyNb: 999,
    patientKeyNb: 5,
    appointmentKeyNb: 0,
    clinicKeyNb: 0,
    statusKeyNb: 1,
    orderStatusKeyNb: 5,
    lastModifiedId: 0,
    lastModifiedTimeStamp: null,
    insertById: 0,
    insertTimeStamp: null,
    firstName: "Sri",
    lastName: "Devi",
    mobileNumber: "98796876524",
    emailId: "sridevi@gmail.com",
    gender: "F",
    appointmentDate: "02-06-2020",
    refill: "Y",
    orderStatus: "Pending",
    statusName: "Order Recieved"
  },
  {
    patientOrderKeyNb: 999,
    patientKeyNb: 5,
    appointmentKeyNb: 0,
    clinicKeyNb: 0,
    statusKeyNb: 1,
    orderStatusKeyNb: 6,
    lastModifiedId: 0,
    lastModifiedTimeStamp: null,
    insertById: 0,
    insertTimeStamp: null,
    firstName: "Dasaradha",
    lastName: "Naidu",
    mobileNumber: "9876867676",
    emailId: "dasaradha@gmail.com",
    gender: "M",
    appointmentDate: "08-05-2020",
    refill: "Y",
    orderStatus: "Pending",
    statusName: "Ready to Pick up"
  },
  {
    patientOrderKeyNb: 999,
    patientKeyNb: 5,
    appointmentKeyNb: 0,
    clinicKeyNb: 0,
    statusKeyNb: 1,
    orderStatusKeyNb: 7,
    lastModifiedId: 0,
    lastModifiedTimeStamp: null,
    insertById: 0,
    insertTimeStamp: null,
    firstName: "Naga",
    lastName: "Jyothi",
    mobileNumber: "768768754767",
    emailId: "nagajyothi@gmail.com",
    gender: "F",
    appointmentDate: "02-04-2020",
    refill: "Y",
    orderStatus: "Completed",
    statusName: "Order Recieved"
  }
];

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.css"]
})
export class OrderListComponent implements OnInit {
  patientDetails: object;
  page = 1;
  pageSize = 5;
  collectionSize = PATIENTS.length;

  get patients(): Patient[] {
    return PATIENTS.map((patient, i) => ({ id: i + 1, ...patient })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
  constructor(private getOrderListService: GetOrderListService) {}

  ngOnInit() {
    this.getOrderListService.getPatientOrderList().subscribe(data => {
      this.patientDetails = data;
      // this.collectionSize = data;
      console.log(this.patientDetails);
    });
  }
}
