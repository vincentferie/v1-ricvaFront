import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService, NavigationItem } from 'projects/tools/src/public-api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  appUrl: string;
  activeTab: string;
  navigation: any;
  appServiceSubscription: Subscription;

  constructor(
    public nav: NavigationItem,
    public appService: AppService,
    private router: Router
  ) { }

  ngOnInit() {
    this.appServiceSubscription = this.appService.appUrl$.subscribe(appUrl => this.appUrl = appUrl);
    this.setNavigation();
  }

  ngOnDestroy(){
    this.appServiceSubscription.unsubscribe();
  }

  setNavigation() {
    this.navigation = this.nav.get();
    const navigationItem = this.navigation.filter(nav => nav.type === 'item');
    this.navigation = this.navigation.filter(nav => nav.type === 'group');
    this.navigation = [...this.navigation, {id: 'autres', title: 'Autres', type: 'group', children: navigationItem}].filter(nav => nav.children.length > 0);
    this.activeTab = this.navigation[0] ? this.navigation[0].id : null;
  }

  navigateTo(url) {
    this.router.navigate(['/', this.appUrl, url]);
  }
}
