import { Component, OnInit } from '@angular/core';
import { GithubAuthProvider, getAdditionalUserInfo, getAuth, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAZHESmlYbRW6oJBoe73-KomxzjwyFT_E",
  authDomain: "github-auth-bd424.firebaseapp.com",
  projectId: "github-auth-bd424",
  storageBucket: "github-auth-bd424.appspot.com",
  messagingSenderId: "261495181956",
  appId: "1:261495181956:web:f6deade856d462463ea8d1"
};

initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'firebase auth';
  auth = getAuth();
  provider = new GithubAuthProvider();

  ngOnInit() {
  }


public sign() {
  console.log("heyyy")

  signInWithPopup(this.auth, this.provider).then((result) => {
    console.log("oiii")
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential;

    // The signed-in user info.
    const user = result.user;
    console.log(user)

    // IdP data available using getAdditionalUserInfo(result)
    // ...
    const moreInfo = getAdditionalUserInfo(result);
    console.log(moreInfo);
  }).catch((error) => {
    console.log(error);
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
}
}
