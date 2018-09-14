import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Input() loginInput: string;
  @Input() passwordInput: string;
  @Output() token: string;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      login: [this.loginInput, Validators.required],
      password: [this.passwordInput, Validators.required],
    });
  }

  register(): void {
    console.log(this.form);
    this.form.reset();
  }

}
