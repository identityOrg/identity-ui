import {Injectable} from '@angular/core';
import {Scope} from '../model/scope';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class ScopeService {

  constructor(private http: HttpClient) {
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
      {params: param, observe: 'body'});
  }

  getScope(scopeId: string): Observable<Scope> {
    return this.http.get<Scope>(environment.apiBase + '/api/scope/' + scopeId, {
      observe: 'body'
    });
  }

  update(scope: Scope): Observable<Scope> {
    return this.http.put<Scope>(environment.apiBase + '/api/scope/' + scope.scopeId, scope, {
      observe: 'body'
    });
  }

  create(scope: Scope): Observable<Scope> {
    return this.http.post<Scope>(environment.apiBase + '/api/scope', scope, {
      observe: 'body'
    });
  }
}
