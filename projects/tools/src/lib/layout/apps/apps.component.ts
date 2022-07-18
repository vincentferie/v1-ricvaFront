import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import { NextConfig } from '../../utils';
import { ConfigurationComponent } from '../admin/configuration/configuration.component';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {
  @ViewChild(ConfigurationComponent, {static: true}) configurationComponent: ConfigurationComponent;
  public nextConfig: any;
  public navCollapsed: boolean;
  public navCollapsedMob: boolean;
  public windowWidth: number;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    this.nextConfig = NextConfig.config;
    this.nextConfig.layout = 'horizontal';
    this.nextConfig.navFixedLayout = false;
    this.nextConfig.headerFixedLayout = false;
    this.nextConfig.collapseMenu = false;

    this.windowWidth = window.innerWidth;

    this.navCollapsed = (this.windowWidth >= 992) ? this.nextConfig.collapseMenu : false;
    this.navCollapsedMob = false;
  }

  ngOnInit() {
    this.document.querySelector('body').classList.add('background-blue');
    this.document.querySelector('body').classList.remove('able-pro-rtl');
    this.document.querySelector('.pcoded-header').classList.remove('headerpos-fixed');
    this.document.querySelector('body').classList.remove('box-layout');
    this.document.querySelector('body').classList.remove('container');
  }

  navMobClick() {
    if (this.windowWidth < 992) {
      if (this.navCollapsedMob && !(document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
        this.navCollapsedMob = !this.navCollapsedMob;
        setTimeout(() => {
          this.navCollapsedMob = !this.navCollapsedMob;
        }, 100);
      } else {
        this.navCollapsedMob = !this.navCollapsedMob;
      }
    }
  }
}
