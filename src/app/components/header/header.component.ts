import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLogin: boolean;
  public nameUser: string;
  public userEmail: string;
  public userPhoto: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        if (!auth.displayName) {
          this.nameUser = 'Usuario';
        } else {
          this.nameUser = auth.displayName;
        }
        if (!this.userPhoto) {
          this.userPhoto = '../../../assets/images/default-user.png';
        }
        this.userEmail = auth.email;
      } else {
        this.isLogin = false;
      }
    })
  }

  logOut() {
    this.authService.logOut()
      .then((res) => {
        this.router.navigate(['/']);
      }).catch((err) => {
        console.log(err);
      })
  }
}
