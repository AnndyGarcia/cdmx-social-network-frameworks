import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public isLogin: boolean;
  public nameUser: string;
  public userEmail: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.nameUser = auth.displayName;
        this.userEmail = auth.email;
      } else {
        this.isLogin = false;
      }
    })
  }

}
