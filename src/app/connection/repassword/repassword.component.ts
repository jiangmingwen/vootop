import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const email = new FormControl('', [
  Validators.required,
  Validators.pattern(EMAIL_REGEX)]);

@Component({
  selector: 'app-repassword',
  templateUrl: './repassword.component.html',
  styleUrls: ['./repassword.component.scss']
})
export class RepasswordComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: email,
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
