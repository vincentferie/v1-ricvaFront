import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToastyModule } from 'ng2-toasty';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { ClickOutsideModule } from 'ng-click-outside';

import {
  AlertModule, BreadcrumbModule, ButtonActionsModule, ButtonFormModule, ButtonWizardModule, CardModule, ChartModule, FileDropModule,
  FullScreenModule, GalleryModule, ModalModule, SpinnerModule, ToastModule, TodoModule
} from './components';
import { RicvaCardModule } from './components/ricva-card/ricva-card.module';
import { RicvaDatatableModule } from './components/ricva-datatable/ricva-datatable.module';
import { RicvaDeleteUiModalModule } from './components/ricva-delete-ui-modal/ricva-delete-ui-modal.module';
import { RicvaFileDropModule } from './components/ricva-file-drop/ricva-file-drop.module';
import {
  AdminComponent, AppsComponent, AuthComponent, ConfigurationComponent, NavBarComponent, NavCollapseComponent, NavContentComponent, NavGroupComponent,
  NavigationComponent, NavItemComponent, NavLeftComponent, NavRightComponent, NavSearchComponent,
} from './layout';
import { NavigationItem } from './layout/admin/navigation/navigation';
import { NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { WINDOW_PROVIDERS } from './services/window.provider';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AuthComponent,
    AppsComponent,
    AdminComponent,
    ConfigurationComponent,
    NavigationComponent,
    NavContentComponent,
    NavCollapseComponent,
    NavGroupComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PerfectScrollbarModule,
    ToastyModule.forRoot(),
    ClickOutsideModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule,
    ToastyModule.forRoot(),
    AlertModule,
    BreadcrumbModule,
    ButtonActionsModule,
    ButtonFormModule,
    ButtonWizardModule,
    RicvaCardModule,
    RicvaDatatableModule,
    RicvaDeleteUiModalModule,
    RicvaFileDropModule,
    ChartModule,
    CardModule,
    FileDropModule,
    FullScreenModule,
    GalleryModule,
    ModalModule,
    SpinnerModule,
    ToastModule,
    TodoModule
  ],
  exports: [
    AlertModule,
    PerfectScrollbarModule,
    BreadcrumbModule,
    ButtonActionsModule,
    ButtonFormModule,
    ButtonWizardModule,
    RicvaCardModule,
    RicvaDatatableModule,
    RicvaDeleteUiModalModule,
    RicvaFileDropModule,
    ChartModule,
    CardModule,
    FileDropModule,
    FullScreenModule,
    GalleryModule,
    ModalModule,
    SpinnerModule,
    ToastModule,
    TodoModule,
    AuthComponent,
    AppsComponent,
    AdminComponent,
    ConfigurationComponent,
    NavigationComponent,
    NavContentComponent,
    NavCollapseComponent,
    NavGroupComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    WINDOW_PROVIDERS,
    NavigationItem
  ]
})
export class ToolsModule { }
