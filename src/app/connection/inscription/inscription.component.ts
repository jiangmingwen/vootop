import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const email = new FormControl('', [
  Validators.required,
  Validators.pattern(EMAIL_REGEX)]);

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: email,
      password: password,
      confirmPassword: confirmPassword
    });
  }

  onSubmit() {
    this.router.navigate(['./']);
  }
  recoverPwd() {
    this.router.navigate(['./repassword']);
  }
  register() {
    this.router.navigate(['./inscription']);
  }
  gotoLogin() {
    this.router.navigate(['./']);
  }
}
