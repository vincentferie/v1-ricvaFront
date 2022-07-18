import { Component, Input, OnInit } from '@angular/core';

import { Role } from '../role.model';

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.scss']
})
export class RoleDetailsComponent implements OnInit {
  @Input() item: Role;

  constructor() { }

  ngOnInit(): void {
  }

}
