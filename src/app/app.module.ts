import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Search_Table_DetailsComponent } from '../components/search_Table_Details/search_Table_Details.component';
import { Details_TableComponent } from '../components/details_Table/details_Table.component';
import { PopUp_DialogComponent } from '../components/popUp_Dialog/popUp_Dialog.component';
import { FormsModule } from '@angular/forms';
@NgModule({
   declarations: [
      AppComponent,
      Search_Table_DetailsComponent,
      Details_TableComponent,
      PopUp_DialogComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
