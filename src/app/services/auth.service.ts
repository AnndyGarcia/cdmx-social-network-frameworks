import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  registerUser(email:string, password:string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( userData => resolve(userData),
      err => reject(err));
    });
  }

  logIn(email:string, password:string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then( userData => resolve(userData),
      err => reject(err));
    });
  }

  loginGoogle(){
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  loginFacebook(){
    return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  getAuth(){
    return this.afAuth.authState.pipe(map(data => data));
  }

  logOut(){
    return this.afAuth.auth.signOut();
  }
}
