import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {LoginService} from './login.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../model/client';

@Injectable()
export class ClientService {

  constructor(private http: HttpClient, private loginService: LoginService) {
  }

  listClients(criteria: Client): Observable<Client[]> {
    const param = new HttpParams();
    if (criteria) {
      if (criteria.clientId) {
        param.set('clientId', criteria.clientId);
      }
      if (criteria.clientName) {
        param.set('clientName', criteria.clientName);
      }
      if (criteria.status) {
        param.set('status', criteria.status);
      }
      if (criteria.redirectUri) {
        param.set('admin', criteria.redirectUri);
      }
    }
    return this.http.get<Client[]>(environment.apiBase + '/api/client',
      {headers: this.loginService.getSecurityHeader(), params: param, observe: 'body'});
  }
}
