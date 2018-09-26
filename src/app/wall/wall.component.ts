import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
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
