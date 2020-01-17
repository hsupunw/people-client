import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PersonListComponent} from './person-list/person-list.component';
import {HttpClientModule} from '@angular/common/http';
import {AddPersonComponent} from './add-person/add-person.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {EditPersonComponent} from './edit-person/edit-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    AddPersonComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    EditPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
