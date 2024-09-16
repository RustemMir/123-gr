import {Component, ViewChild} from '@angular/core';
import {MatTable} from "@angular/material/table";
import {BooksActions} from "../../state/books.actions";
import {GoogleBooksService} from "../../book-list/books.service";
import {Store} from "@ngrx/store";
import {GrpcActions} from "../../state/grpc/grpc.action";
import {Archive} from "../../state/grpc/grpc.model";
import {selectorGetPage} from "../../state/books.selectors";
import {selectorRowGrpc} from "../../state/grpc/grpc.selector";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const row: Archive = {
  internalId: "internalId",
  date: "date",
  id: 0,
  name: "name",
  email: "email",
  gender: "gender",
  status: "status",
};

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [...ELEMENT_DATA];
  rowGrpc$ = this.store.select(selectorRowGrpc);
  rowGrpc: Archive;


  @ViewChild(MatTable) table: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }



  testData() {
    this.store.dispatch(GrpcActions.addRow({row}));
  }

  constructor(private grpcService: GoogleBooksService, private store: Store){

  }

  ngOnInit() {
    this.rowGrpc$.subscribe(archive => {
      console.log('subscribe get row:')
      console.log(archive);
      let val: PeriodicElement = {
        position: archive.id,
        name: archive.gender,
        weight: archive.id,
        symbol: archive.internalId
      }
      this.dataSource.push(val);
      this.table.renderRows();

      //return this.rowGrpc;
    })
  }
}
