import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppLoadingOverlayService {
  loadingOverlaySubjet = new BehaviorSubject<boolean>(false);

  constructor() { }

  loadingInProgress() {
    this.loadingOverlaySubjet.next(true);
  }

  loadingDone() {
    this.loadingOverlaySubjet.next(false);
  }
}
