import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginGuard} from './security/login.guard';
import {LogoutGuard} from './security/logout.guard';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {CallbackComponent} from './security/callback/callback.component';
import {ScopeComponent} from './pages/scope/scope.component';
import {LogoutComponent} from './pages/logout/logout.component';
import {EditUserComponent} from './pages/user/edit-user/edit-user.component';
import {DetailUserComponent} from './pages/user/detail-user/detail-user.component';
import {CreateUserComponent} from './pages/user/create-user/create-user.component';
import {UserComponent} from './pages/user/user.component';
import {EditClientComponent} from './pages/client/edit-client/edit-client.component';
import {DetailClientComponent} from './pages/client/detail-client/detail-client.component';
import {CreateClientComponent} from './pages/client/create-client/create-client.component';
import {ClientComponent} from './pages/client/client.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: HomeComponent, canActivate: [LoginGuard]},
  {
    path: 'client', children: [
    {path: '', pathMatch: 'full', component: ClientComponent, canActivate: [LoginGuard]},
    {path: 'create', component: CreateClientComponent, canActivate: [LoginGuard]},
    {path: 'detail/:clientId', component: DetailClientComponent, canActivate: [LoginGuard]},
    {path: 'edit/:clientId', component: EditClientComponent, canActivate: [LoginGuard]}
  ]
  },
  {
    path: 'user', children: [
    {path: '', pathMatch: 'full', component: UserComponent, canActivate: [LoginGuard]},
    {path: 'create', component: CreateUserComponent, canActivate: [LoginGuard]},
    {path: 'detail/:clientId', component: DetailUserComponent, canActivate: [LoginGuard]},
    {path: 'edit/:clientId', component: EditUserComponent, canActivate: [LoginGuard]}
  ]
  },
  {path: 'scope', component: ScopeComponent, canActivate: [LoginGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [LogoutGuard]},
  {path: 'callback', component: CallbackComponent},
  {path: '**', component: PageNotFoundComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, LogoutGuard]
})
export class AppRoutingModule {
}
