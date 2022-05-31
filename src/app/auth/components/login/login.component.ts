import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    email: [{value: 'conceito@conceitotecnologia.info', disabled: true},[Validators.required]],
    password: ['', [Validators.required, Validators.minLength(10)]]
  })

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.form.value)
  }

}
