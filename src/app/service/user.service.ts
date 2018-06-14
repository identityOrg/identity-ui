import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {LoginService} from './login.service';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from '../model/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private loginService: LoginService) {
  }

  listUsers(criteria: User): Observable<User[]> {
    const param = new HttpParams();
    if (criteria) {
      if (criteria.firstName) {
        param.set('firstName', criteria.firstName);
      }
      if (criteria.lastName) {
        param.set('lastName', criteria.lastName);
      }
      if (criteria.status) {
        param.set('status', criteria.status);
      }
      if (criteria.admin) {
        param.set('admin', criteria.admin.toString());
      }
      if (criteria.username) {
        param.set('username', criteria.username);
      }
    }
    return this.http.get<User[]>(environment.apiBase + '/api/user',
      {headers: this.loginService.getSecurityHeader(), params: param, observe: 'body'});
  }
}
