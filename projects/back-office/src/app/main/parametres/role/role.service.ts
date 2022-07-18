import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from 'src/app/shared/services/rest.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends RestService {
  protected resource = 'roles';

  constructor(protected http: HttpClient, protected toastrService: ToastrService) {
    super(http, toastrService);
  }
}
