import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Title = 'login'
  loginform = new FormGroup({
    password: new FormControl('', [Validators.required]),
  });
  
  constructor() {}

  ngOnInit(): void {}

  get password() {
    return this.loginform.get('password');
  }

}
