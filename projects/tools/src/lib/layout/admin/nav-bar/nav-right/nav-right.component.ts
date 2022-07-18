import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../../../../services/auth.service';
import { WINDOW } from '../../../../services/window.provider';


@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {
  user: any = this.auth.getUser();
  baseUrl: string;

  constructor(
    private auth: AuthService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
    this.baseUrl = `${this.window.location.protocol}//${this.window.location.hostname}`;
    if (this.window.location.port) {
      this.baseUrl += `:${this.window.location.port}`;
    }
  }

  logout() {
    this.auth.removeDataToken();
    this.document.location.reload();
  }
}
