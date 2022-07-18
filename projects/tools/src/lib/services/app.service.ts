import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Error {

}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  appUrlSubject = new BehaviorSubject<string>('');
  appUrl$: Observable<string> = this.appUrlSubject.asObservable();

  constructor() { }

  setAppUrl(appUrl) {
    this.appUrlSubject.next(appUrl);
  }
}
