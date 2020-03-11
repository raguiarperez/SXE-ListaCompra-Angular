import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';


@Injectable({
  providedIn: 'root'
})

export class ServicioDeAutentService {

  user = this.miauth.authState;
  // usuario ya autenticado
  authUser = null;

  constructor(public miauth: AngularFireAuth) {
  }

  login() {
    console.log('login!');
  }

  glogin() {
    console.log('Google login!');
    this.miauth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(user => {
        this.authUser = user.user;
        console.log('this.authUser: ', this.authUser);
      })
      .catch(error => console.log(error));
  }

  logout() {
    console.log('logout!');
    this.miauth.auth.signOut();
  }
}
