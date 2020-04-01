import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbDate, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Search_Table_DetailsComponent } from "../components/search_Table_Details/search_Table_Details.component";
import { Details_TableComponent } from "../components/details_Table/details_Table.component";
import { PopUp_DialogComponent } from "../components/popUp_Dialog/popUp_Dialog.component";
import { FormsModule } from "@angular/forms";
import { Table_details_searchPipe } from "../table_details_search.pipe";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    Search_Table_DetailsComponent,
    Details_TableComponent,
    PopUp_DialogComponent,
    Table_details_searchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
