import { Injectable } from '@angular/core';
import { ToastyService, ToastOptions } from 'ng2-toasty';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  private defaultOptions = {
    showClose: true,
    timeout: 5000,
    theme: 'bootstrap'
  };
  private successDefaultOptions: ToastOptions = {
    title: 'Enregisté !',
    msg: 'Enregistrement avec succès.'
  };
  private editedOptions: ToastOptions = {
    ...this.defaultOptions,
    title: 'Modifié !',
    msg: 'Modification éffectuée avec succès .'
  };
  private deleteOptions: ToastOptions = {
    title: 'Supprimé !',
    msg: 'Suppression éffectuée avec succès .'
  };
  private doneDefaultOptions: ToastOptions = {
    title: 'Succès !',
    msg: 'Effectué avec succès.'
  };
  private errorOptions: ToastOptions = {
    title: 'Echec !',
    msg: 'Une erreur inattendue est survenue .'
  };
  private invalidFormOptions: ToastOptions = {
    title: 'Echec !',
    msg: 'Le formulaire est incorrecte'
  };
  private infoOptions: ToastOptions = {
    title: 'Info !'
  };
  positionSubjet: BehaviorSubject<string> = new BehaviorSubject<string>('top-right');

  constructor(private toastService: ToastyService) { }

  get position() {
    return this.positionSubjet.asObservable();
  }

  setPosition(value: string) {
    this.positionSubjet.next(value);
  }
  
  success(options?: ToastOptions) {
    this.toastService.success(options || {...this.defaultOptions, ...this.successDefaultOptions});
  }

  done(options?: ToastOptions) {
    this.toastService.success(options || {...this.defaultOptions, ...this.doneDefaultOptions});
  }

  delete(options?: ToastOptions) {
    this.toastService.success(options || {...this.defaultOptions, ...this.deleteOptions});
  }

  edited(options?: ToastOptions) {
    this.toastService.success(options || {...this.defaultOptions, ...this.editedOptions});
  }

  error(options?: ToastOptions) {
    this.toastService.warning(options || {...this.defaultOptions, ...this.errorOptions});
  }

  info(options?: ToastOptions) {
    this.toastService.info(options || {...this.defaultOptions, ...this.infoOptions});
  }

  invalidForm(options?: ToastOptions) {
    this.toastService.warning(options || {...this.defaultOptions, ...this.invalidFormOptions});
  }
}
