import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const email = new FormControl('', [
  Validators.required,
  Validators.pattern(EMAIL_REGEX)]);
@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})

export class ConnectionComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group ( {
      email: email,
      password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }
  onSubmit() {
    this.router.navigate ( [ './main/social' ] );
  }
  recoverPwd() {
    this.router.navigate ( [ './repassword' ] );
  }
  register() {
    this.router.navigate ( [ './inscription' ] );
  }


}
