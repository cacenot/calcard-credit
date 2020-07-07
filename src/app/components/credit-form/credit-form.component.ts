import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidationService } from '../../services/validation-service.service'
import { CreditService } from '../../services/credit.service'

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.scss']
})
export class CreditFormComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  approved: boolean = false;
  name: string = '';

  constructor(
    private fb: FormBuilder,
    private creditService: CreditService
  ) {
    this.fbForm()
  }

  ngOnInit(): void {}

  fbForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      cpf: ['', [Validators.required, ValidationService.cpfValidator]],
      birthday: ['', [Validators.required]],
      gender: ['M', Validators.required],
      martialStatus: ['', Validators.required],
      dependentsNumber: [0, [Validators.required, Validators.min(0)]],
      income: ['', Validators.required],
    })
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      const person = this.form.value;
      this.name = person.name.split(' ')[0];
      this.creditService.analyze(person).then(approved => {
        this.loading = false;
        this.submitted = true;
        this.approved = approved;
      })
    }
  }

}
