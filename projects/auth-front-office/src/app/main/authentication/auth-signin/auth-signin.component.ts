import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'projects/tools/src/public-api';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  returnUrl: string;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    this.initForm();

    // reset login status
    this.auth.removeDataToken();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get loginControls() { return this.loginForm.controls; }

  onLoginSubmit() {
    const credentials = {...this.loginForm.value};

    this.loading = true;

    this.auth.login(credentials)
      .subscribe(
        data => {
          this.loading = false;
          this.document.location.reload();
        },
        error => {
          this.loading = false;
          this.error = 'Identifiants de connexion incorrects. Veuillez réessayer.';
        });
  }
}
