import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbDate, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Search_Table_DetailsComponent } from "../components/search_Table_Details/search_Table_Details.component";
import { Details_TableComponent } from "../components/details_Table/details_Table.component";
import { PopUp_DialogComponent } from "../components/popUp_Dialog/popUp_Dialog.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { Table_details_searchPipe } from "../table_details_search.pipe";
import { HttpClientModule } from "@angular/common/http";
import { DoctorDetailsFormComponent } from "../components/doctor-details-form/doctor-details-form.component";
import { Update_doctorDetailsComponent } from "../components/update_doctorDetails/update_doctorDetails.component";
import { Pharmacy_DetailsComponent } from "../components/pharmacy_Details/pharmacy_Details.component";
import { NgxPaginationModule } from "ngx-pagination";
import { PharmacyDetailsFormComponent } from "../components/pharmacy-details-form/pharmacy-details-form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MakePaymentComponent } from "../components/make-payment/make-payment.component";
import { LinkInsuranceComponent } from "../components/link-insurance/link-insurance.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { OrderListComponent } from "../components/order-list/order-list.component";
@NgModule({
  declarations: [
    AppComponent,
    Search_Table_DetailsComponent,
    Details_TableComponent,
    PopUp_DialogComponent,
    Table_details_searchPipe,
    DoctorDetailsFormComponent,
    Update_doctorDetailsComponent,
    Pharmacy_DetailsComponent,
    PharmacyDetailsFormComponent,
    MakePaymentComponent,
    LinkInsuranceComponent,
    OrderListComponent
  ],
  entryComponents: [PopUp_DialogComponent, LinkInsuranceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
