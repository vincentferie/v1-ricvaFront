import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front-office';

  ngOnInit() {
    localStorage.setItem('dataToken', JSON.stringify({
      access_token: 'string',
      token_type: 'string',
      refresh_token: 'string',
      expire_in: 1,
      user: {
        id: 'string',
        civilite: 'M',
        nom: 'Djama',
        prenoms: 'Vernet',
        email: 'vernetdjama@gmail.com',
        contact: '01020304',
        mpass: 'string'
      }
    }))
  }
}
