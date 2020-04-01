import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search_Table_Details',
  templateUrl: './search_Table_Details.component.html',
  styleUrls: ['./search_Table_Details.component.css']
})
export class Search_Table_DetailsComponent implements OnInit {
  searchText: string;
  @Output() searchTextop = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  filterSearchText(e){
    this.searchTextop.emit(e)
  }

}
