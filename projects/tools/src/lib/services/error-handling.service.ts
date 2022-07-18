import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Error {

}

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  errorsSubjet = new BehaviorSubject<boolean>(false);

  constructor() { }

  setErrors(errors) {
    this.errorsSubjet.next(errors);
  }
}
