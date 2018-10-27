import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PasswordValidation } from './password-validator.component';


declare interface User {
    text?: string; // required, must be 5-8 characters
    email?: string; // required, must be valid email format
    password?: string; // required, value must be equal to confirm password.
    confirmPassword?: string; // required, value must be equal to password.
    number?: number; // required, value must be equal to password.
    url?: string;
    idSource?: string;
    idDestination?: string;
}

@Component({
    selector: 'app-validationforms-cmp',
    templateUrl: 'validationforms.component.html'
})

export class ValidationFormsComponent implements OnInit {
    public user: User;
    public typeValidation: User;

  ngOnInit() {
    this.user = {
      email: '',
      password: '',
      confirmPassword: ''
  };
    this.typeValidation = {
        text: '',
        email: '',
        idSource: '',
        idDestination: '',
        url: ''
    };
  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }
    onSubmit(value: any): void {
        console.log(value);
    }
}
