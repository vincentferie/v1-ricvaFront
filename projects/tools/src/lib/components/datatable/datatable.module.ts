import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DataTableDirective} from './datatable.directive';
import {SorterComponent} from './sorter.component';
import {PaginatorComponent} from './paginator.component';
import {BootstrapPaginatorComponent} from './bootstrap-paginator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DataTableDirective,
    SorterComponent,
    PaginatorComponent,
    BootstrapPaginatorComponent
  ],
  exports: [
    DataTableDirective,
    SorterComponent,
    PaginatorComponent,
    BootstrapPaginatorComponent
  ]
})
export class DataTableModule {

}
