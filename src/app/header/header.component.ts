import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOut()
      .then((res) => {
        this.router.navigate(['/']);
      }).catch((err) => {
        console.log(err);
      })
  }

  profile() {
    this.router.navigate(['/profile']);
  }

  wall() {
    this.router.navigate(['/wall']);
  }

}
