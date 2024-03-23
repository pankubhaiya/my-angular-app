import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private uid?:string;
  constructor(private router: Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
      
       
        this.uid = user.uid
        console.log("user log in ",user.email)
        // ...
      } else {
        this.uid = undefined
        console.log("user logout ")
        this.router.navigate(['/']);
      }
    });
  }
  isAuthticate(){
    return this.uid ? true : false
  }
  getuid(){
    return this.uid
  }
  resiterUser(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert('somthing went wrong');
      });
  }
  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
        this.router.navigate(['/todo']);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert('somthing went wrong');
      });
  }

  logOut() {
    const auth = getAuth();
    signOut(auth).catch((error) => {
      alert('somthing went wrong');
    });
  }
}
