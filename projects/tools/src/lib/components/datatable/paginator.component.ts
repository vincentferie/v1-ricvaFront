import {Component, Input, SimpleChange, OnChanges, Optional} from '@angular/core';

import {DataTableDirective, PageEvent} from './datatable.directive';

@Component({
  selector: 'paginator',
  template: `<ng-content></ng-content>`
})
export class PaginatorComponent implements OnChanges {
  @Input('table') inputTable: DataTableDirective;

  private table: DataTableDirective;

  public activePage: number;
  public rowsOnPage: number;
  public dataLength: number = 0;
  public lastPage: number;

  public constructor(@Optional() private injectTable: DataTableDirective) {
  }

  public ngOnChanges(changes: {[key: string]: SimpleChange}): any {
    this.table = this.inputTable || this.injectTable;
    this.onPageChangeSubscriber(this.table.getPage());
    this.table.onPageChange.subscribe(this.onPageChangeSubscriber);
  }

  public setPage(pageNumber: number): void {
    this.table.setPage(pageNumber, this.rowsOnPage);
  }

  public setRowsOnPage(rowsOnPage: number): void {
    this.table.setPage(this.activePage, rowsOnPage);
  }

  private onPageChangeSubscriber = (event: PageEvent)=> {
    this.activePage = event.activePage;
    this.rowsOnPage = event.rowsOnPage;
    this.dataLength = event.dataLength;
    this.lastPage = Math.ceil(this.dataLength / this.rowsOnPage);
  };
}
