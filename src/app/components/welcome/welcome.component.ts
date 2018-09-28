import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/wall']);
      }).catch((err) => {
        alert(err.message);
      })
  }

  onSubmitOldUser() {
    this.authService.logIn(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/wall']);
      }).catch((err) => {
        alert(err.message);
      })
  }

  clickGoogle() {
    this.authService.loginGoogle()
      .then((res) => {
        this.router.navigate(['/wall']);
      }).catch((err) => {
        alert(err.message);
      })
  }

  clickFacebook() {
    this.authService.loginFacebook()
      .then((res) => {
        this.router.navigate(['/wall']);
      }).catch((err) => {
        console.log(err.message);
      })
  }

}
