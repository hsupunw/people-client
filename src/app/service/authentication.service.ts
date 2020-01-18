import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export class Message {
  constructor(public message: string,) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {
  }

  authenticate(username, password): Observable<Message> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.httpClient.get<Message>('http://localhost:8080/home', {headers}).pipe(
      map(
        data => {
          console.log(data);
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('password', password);
          return data;
        }
      )
    );
  }

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut(): void {
    sessionStorage.removeItem('username');
  }
}
