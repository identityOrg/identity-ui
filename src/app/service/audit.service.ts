import {Injectable} from '@angular/core';
import {LoginService} from './login.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Audit} from '../model/audit';

@Injectable()
export class AuditService {

  constructor(private http: HttpClient, private loginService: LoginService) {
  }

  searchAudits(criteria: Audit): Observable<Audit[]> {
    const param = new HttpParams();
    if (criteria) {
      if (criteria.eventName) {
        param.set('eventName', criteria.eventName);
      }
      if (criteria.exceptionMessage) {
        param.set('exceptionMessage', criteria.exceptionMessage);
      }
      if (criteria.exceptionName) {
        param.set('exceptionName', criteria.exceptionName);
      }
      if (criteria.message) {
        param.set('message', criteria.message);
      }
      if (criteria.principleName) {
        param.set('principleName', criteria.principleName);
      }
      if (criteria.remoteIp) {
        param.set('remoteIp', criteria.remoteIp);
      }
      if (criteria.sessionId) {
        param.set('sessionId', criteria.sessionId);
      }
    }
    return this.http.get<Audit[]>(environment.apiBase + '/api/audit',
      {headers: this.loginService.getSecurityHeader(), params: param, observe: 'body'});
  }
}
