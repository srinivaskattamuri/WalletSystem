import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private authService: SocialAuthService,
    private router: Router) { }


  ngOnInit(): void {
  }


  loginWithFacebook(): void{
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((data) => {
       this.router.navigate(['dashboard']);
    }).catch(data => {
      this.authService.signOut();
      this.router.navigate(['login']);
    });
  }

  googleLoginOptions = {
    scope: 'profile email'
  };

  loginWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID, this.googleLoginOptions ).then((data) => {
        console.log(data);
        this.router.navigate(['dashboard']);
      }).catch(data => {
         this.authService.signOut();
         this.router.navigate(['login']);
      });

}
}
