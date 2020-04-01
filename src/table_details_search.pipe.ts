import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'table_details_search'
})
export class Table_details_searchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
console.log('serchtext',searchText)

    return items.filter(value => {
      const name = value.name.toLowerCase().includes(searchText.toLowerCase())
      const email = value.email.toLowerCase().includes(searchText.toLowerCase())
      const city = value.city.toLowerCase().includes(searchText.toLowerCase())
      const specialites = value.specialites.toLowerCase().includes(searchText.toLowerCase())
      return (name + email + city + specialites);
    });
  }
}