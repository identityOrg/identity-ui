import {Component} from '@angular/core';
import {AuthConfig, JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';


export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'http://localhost:8080',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/callback',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'insecure',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email',
  clearHashAfterLogin: true
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
