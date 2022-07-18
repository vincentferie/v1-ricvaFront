import { Injectable } from '@angular/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Injectable({
  providedIn: 'root'
})
export class TextmaskService {
  constructor() { }

  commaNumberMask() {
    return createNumberMask({
      allowDecimal: true,
      requireDecimal: false,
      decimalSymbol: ',',
      decimalLimit: 3,
      prefix: '',
      includeThousandsSeparator: true,
      thousandsSeparatorSymbol: ' '
    });
  }
}
