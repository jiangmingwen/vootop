import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const email = new FormControl('', [
  Validators.required,
  Validators.pattern(EMAIL_REGEX)]);
@Component({
  selector: 'app-connection',
  template:`
      <router-outlet></router-outlet>
  `
})

export class ConnectionHomeComponent {

}
