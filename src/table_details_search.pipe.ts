import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "table_details_search"
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
    console.log("serchtext", searchText);

    return items.filter(value => {
      return (
        value.fullName.search(new RegExp(searchText, "i")) != -1 ||
        value.email.search(new RegExp(searchText, "i")) != -1 ||
        value.city.search(new RegExp(searchText, "i")) != -1 ||
        value.specialization.search(new RegExp(searchText, "i")) != -1
      );
    });
  }
}
