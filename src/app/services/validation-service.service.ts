import { Injectable } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Injectable()
export class ValidationService {

  constructor() { }

  static cpfValidator(control: FormControl) {
    const value = control.value == null ? null : control.value.toString().replace(/[^0-9]/g, '');
    if (ValidationService.isPresent(Validators.required(control))) return null;
    if (ValidationService.checkCpf(value)) {
      return null;
    }
    return {
      invalidCpf: {
        valid: false
      }
    };
  }

  static checkCpf(cpf: string): boolean {
    const CPF_REGEXP = /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/;
    if (!CPF_REGEXP.test(cpf)) {
      return false;
    }

    let sum: number;
    let rest: number;
    sum = 0;
    if (cpf == "00000000000") return false;

    for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(cpf.substring(10, 11))) return false;
    return true;
  }

  static isPresent(obj: any): boolean {
    return obj !== undefined && obj !== null;
  }
}