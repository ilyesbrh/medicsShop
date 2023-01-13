import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['home']);
  }

}
