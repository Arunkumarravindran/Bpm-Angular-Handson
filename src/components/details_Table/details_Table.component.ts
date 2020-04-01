import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details_Table',
  templateUrl: './details_Table.component.html',
  styleUrls: ['./details_Table.component.css']
})
export class Details_TableComponent implements OnInit {
  searchText: string;
  constructor() { }

  ngOnInit() {
  }

  searchPoduct(data){
    this.searchText = data;
      }

}
