import {Component, ViewChild} from '@angular/core';
import {MatTable} from "@angular/material/table";
import {BooksActions} from "../../state/books.actions";
import {GoogleBooksService} from "../../book-list/books.service";
import {Store} from "@ngrx/store";
import {GrpcActions} from "../../state/grpc/grpc.action";
import {Archive} from "../../state/grpc/grpc.model";
import {selectorGetPage} from "../../state/books.selectors";
import {selectorRowGrpc} from "../../state/grpc/grpc.selector";
import { DatePipe } from '@angular/common';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', date: Date.now().toString()},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', date: Date.now().toString()},
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
  styleUrls: ['./table.component.css'],
  providers: [DatePipe]
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'date'];
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


  constructor(private grpcService: GoogleBooksService, private store: Store, public datepipe: DatePipe){

  }

  ngOnInit() {
    this.rowGrpc$.subscribe(archive => {
      console.log('subscribe get row:')
      console.log(archive);
      let val: PeriodicElement = {
        position: archive.id,
        name: archive.gender,
        weight: archive.id,
        symbol: archive.internalId,
        date: this.datepipe.transform(Date.now(), 'yyyy.mm.dd hh:mm:ss'),
      }
      this.dataSource.unshift(val);
      this.table.renderRows();


      //return this.rowGrpc;
    })
  }
}
