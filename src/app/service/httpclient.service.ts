import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export class Person {
  constructor(
    public id: string,
    public first_name: string,
    public last_name: string,
    public age: number,
    public favourite_colour: string,
    public hobby: string[]) {
  }
}

class EmbeddedPersonResponse {
  _embedded: EmbeddedPersonList;
}

class EmbeddedPersonList {
  persons: Person[];
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }

  getPersons(): Observable<EmbeddedPersonResponse> {
    const headers = this.getHeaders();
    return this.httpClient.get<EmbeddedPersonResponse>('http://localhost:8080/persons', {headers});
  }

  public deletePerson(person: Person): Observable<Person> {
    const headers = this.getHeaders();
    return this.httpClient.delete<Person>('http://localhost:8080/persons' + '/' + person.id, {headers});
  }

  public createPerson(person: Person): Observable<Person> {
    const headers = this.getHeaders();
    return this.httpClient.post<Person>('http://localhost:8080/persons', person, {headers});
  }

  public updatePerson(person: Person): Observable<Person> {
    const headers = this.getHeaders();
    return this.httpClient.put<Person>('http://localhost:8080/persons' + '/' + person.id, person, {headers});
  }

  getHeaders(): HttpHeaders {
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');
    const headers: string = 'Basic ' + window.btoa(username + ':' + password);
    return new HttpHeaders({Authorization: headers});
  }
}
