import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { WINDOW } from 'projects/tools/src/public-api';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  baseUrl: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
    this.baseUrl = `${this.window.location.protocol}//${this.window.location.hostname}`;
    if (this.window.location.port) {
      this.baseUrl += `:${this.window.location.port}`;
    }
  }

  goToApp(type) {
    this.document.location.href = `${this.baseUrl}/${type}/menu`;
  }
}
