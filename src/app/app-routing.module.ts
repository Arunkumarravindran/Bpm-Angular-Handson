import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Search_Table_DetailsComponent } from "../components/search_Table_Details/search_Table_Details.component";
import { Details_TableComponent } from "../components/details_Table/details_Table.component";
import { PopUp_DialogComponent } from "../components/popUp_Dialog/popUp_Dialog.component";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import {Pharmacy_DetailsComponent} from '../components/pharmacy_Details/pharmacy_Details.component'
import {MakePaymentComponent} from '../components/make-payment/make-payment.component'


const routes: Routes = [
  {
    path: "search",
    component: Search_Table_DetailsComponent
  },
  {
    path: "pharmacyDetails",
    component: Pharmacy_DetailsComponent
  },
  {
    path: "displayDetails",
    component: Details_TableComponent
  },
  {
    path: "makePayment",
    component: MakePaymentComponent
  },
  {
    path: "app",
    component: AppComponent
  },
  {
    path: "",
    redirectTo: "displayDetails",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule {}
