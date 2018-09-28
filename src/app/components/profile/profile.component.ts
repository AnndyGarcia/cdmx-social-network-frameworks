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
  public userPhoto: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.userEmail = auth.email;
        if (!auth.displayName) {
          this.nameUser = 'Usuarix';
        } else {
          this.nameUser = auth.displayName;
        }
        if (!auth.photoURL) {
          this.userPhoto = '../../assets/images/default-user.png';
        } else {
          this.userPhoto = auth.photoURL;
        }
      } else {
        this.isLogin = false;
      }
    })
  }

}
