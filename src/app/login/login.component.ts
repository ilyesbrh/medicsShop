import { AuthManagerService } from './../globals/services/auth-manager.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private router: Router, private auth: AuthManagerService) { }

  ngOnInit(): void {
  }

  async login() {

    const res = await this.auth.login({ username: this.username, password: this.password }).toPromise();

    if (res.success) this.router.navigate(['home']);
  }

}
