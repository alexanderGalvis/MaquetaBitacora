import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<LoginComponent>
  ) {}

  ngOnInit() {
    this.form = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit() {
    console.log(this.form);
    this.dialogRef.close();
  }
}
