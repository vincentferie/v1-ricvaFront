import { Component, Input, OnInit } from '@angular/core';

import { Utilisateur } from '../utilisateur.model';

@Component({
  selector: 'app-utilisateur-details',
  templateUrl: './utilisateur-details.component.html',
  styleUrls: ['./utilisateur-details.component.scss']
})
export class UtilisateurDetailsComponent implements OnInit {
  @Input() item: Utilisateur;

  constructor() { }

  ngOnInit(): void {
  }

}
