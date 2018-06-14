import {Injectable} from '@angular/core';
import {Scope} from '../model/scope';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {LoginService} from './login.service';
import {environment} from '../../environments/environment';

@Injectable()
export class ScopeService {

  constructor(private http: HttpClient, private loginService: LoginService) {
  }

  listScopes(criteria: Scope): Observable<Scope[]> {
    const param = new HttpParams();
    if (criteria) {
      if (criteria.scopeId) {
        param.set('scopeId', criteria.scopeId);
      }
      if (criteria.scopeName) {
        param.set('scopeName', criteria.scopeName);
      }
    }
    return this.http.get<Scope[]>(environment.apiBase + '/api/scope',
      {headers: this.loginService.getSecurityHeader(), params: param, observe: 'body'});
  }
}
