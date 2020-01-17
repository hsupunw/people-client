import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonListComponent} from './person-list/person-list.component';
import {AddPersonComponent} from './add-person/add-person.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {AuthGuardService} from './service/auth-guard.service';
import {EditPersonComponent} from './edit-person/edit-person.component';

const routes: Routes = [
  {path: '', component: PersonListComponent, canActivate: [AuthGuardService]},
  {path: 'add-person', component: AddPersonComponent, canActivate: [AuthGuardService]},
  {path: 'edit-person', component: EditPersonComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
