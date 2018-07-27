import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../model/client';

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) {
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
      {params: param, observe: 'body'});
  }

  getClient(clientId: string): Observable<Client> {
    return this.http.get<Client>(environment.apiBase + '/api/client/' + clientId, {
      observe: 'body'
    });
  }

  edit(client: Client): Observable<Client> {
    return this.http.put<Client>(environment.apiBase + '/api/client/' + client.clientId, client, {
      observe: 'body'
    });
  }

  lock(clientId: string): Observable<Client> {
    return this.http.post<Client>(environment.apiBase + '/api/client/' + clientId + '/status',
      {status: 'LOCKED'},
      {
        observe: 'body'
      });
  }

  enable(clientId: string): Observable<Client> {
    return this.http.post<Client>(environment.apiBase + '/api/client/' + clientId + '/status',
      {status: 'ACTIVE'},
      {
        observe: 'body'
      });
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(environment.apiBase + '/api/client',
      client,
      {
        observe: 'body'
      });
  }
}
