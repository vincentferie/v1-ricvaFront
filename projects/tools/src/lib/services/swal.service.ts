import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {
  constructor() { }

  alert(config, callback) {
    Swal.fire(config).then((result) => {
      if (result.value) {
        callback();
      }
    });
  }

  success(config) {
    Swal.fire(config.title, config.message, 'success');
  }

  error(config) {
    Swal.fire(config.title, config.message, 'error');
  }
}
