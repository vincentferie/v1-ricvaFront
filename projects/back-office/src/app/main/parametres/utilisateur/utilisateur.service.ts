import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from 'src/app/shared/services/rest.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService extends RestService {
  protected resource = 'users';

  constructor(protected http: HttpClient, protected toastrService: ToastrService) {
    super(http, toastrService);
  }
}
