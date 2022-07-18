import {Component, Input, OnInit} from '@angular/core';

import {DataTableDirective, SortEvent} from './datatable.directive';

@Component({
  selector: 'sorter',
  template: `
  <a style="cursor: pointer" (click)="sort()" class="text-nowrap">
    <ng-content></ng-content>
    <span *ngIf="isSortedByMeAsc" [ngClass]="iconAscClass" aria-hidden="true"></span>
    <span *ngIf="isSortedByMeDesc" [ngClass]="iconDescClass" aria-hidden="true"></span>
    <span *ngIf="!isSortedByMeAsc && !isSortedByMeDesc " [ngClass]="iconNotClass" aria-hidden="true"></span>
  </a>`
})
export class SorterComponent implements OnInit {
  @Input('by') sortBy: string;
  @Input('iconAsc') iconAscClass: string;
  @Input('iconDesc') iconDescClass: string;
  @Input('iconNotClass') iconNotClass: string;

  isSortedByMeAsc: boolean = false;
  isSortedByMeDesc: boolean = false;

  public constructor(private mfTable: DataTableDirective) {
  }

  public ngOnInit(): void {
    this.mfTable.onSortChange.subscribe((event: SortEvent) => {
      this.isSortedByMeAsc = (event.sortBy == this.sortBy && event.sortOrder == 'asc');
      this.isSortedByMeDesc = (event.sortBy == this.sortBy && event.sortOrder == 'desc');
    });
  }

  sort() {
    if (this.isSortedByMeAsc) {
      this.mfTable.setSort(this.sortBy, 'desc');
    } else {
      this.mfTable.setSort(this.sortBy, 'asc');
    }
  }
}
