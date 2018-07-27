import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {OAuthService} from 'angular-oauth2-oidc';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private oauthService: OAuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log(this.oauthService.getAccessToken());
    console.log(this.oauthService.getAccessTokenExpiration());
    console.log(this.oauthService.getGrantedScopes());

    if (this.oauthService.hasValidAccessToken()) {
      return true;
    } else {
      this.oauthService.initImplicitFlow();
      return false;
    }
  }
}
