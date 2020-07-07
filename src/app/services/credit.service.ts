import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor() { }

  analyze(person: any): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.creditAnalyzer(person))
      }, 3000);
    })
  }

  private creditAnalyzer(person: any): boolean {
    return Boolean(Math.random() >= 0.5)
  }

}
