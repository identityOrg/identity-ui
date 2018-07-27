import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from '../model/user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
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
      if (criteria.active) {
        param.set('active', criteria.active.toString());
      }
      if (criteria.locked) {
        param.set('locked', criteria.locked.toString());
      }
      if (criteria.admin) {
        param.set('admin', criteria.admin.toString());
      }
      if (criteria.username) {
        param.set('username', criteria.username);
      }
    }
    return this.http.get<User[]>(environment.apiBase + '/api/user', {
      params: param,
      observe: 'body'
    });
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(environment.apiBase + '/api/user/' + username, {
      observe: 'body'
    });
  }

  edit(user: User): Observable<User> {
    return this.http.put<User>(environment.apiBase + '/api/user/' + user.username, user, {
      observe: 'body'
    });
  }


  lock(username: string): Observable<User> {
    return this.http.post<User>(environment.apiBase + '/api/user/' + username + '/status',
      {status: 'LOCKED'},
      {
        observe: 'body'
      });
  }

  enable(username: string, password: string): Observable<User> {
    return this.http.post<User>(environment.apiBase + '/api/user/' + username + '/status',
      {
        status: 'ACTIVE',
        password: password
      },
      {
        observe: 'body'
      });
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(environment.apiBase + '/api/user',
      user,
      {
        observe: 'body'
      });
  }
}
