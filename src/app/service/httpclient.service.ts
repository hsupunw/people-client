import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
  peopleModulePersonList: Person[];
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }

  getPersons() {
    const basicString = this.getHeaders();

    const headers = new HttpHeaders(
      {Authorization: basicString}
    );
    return this.httpClient.get<EmbeddedPersonResponse>('http://localhost:8080/persons', {headers});
  }

  public deletePerson(person: Person) {
    return this.httpClient.delete<Person>('http://localhost:8080/persons' + '/' + person.id);
  }

  public createPerson(person: Person) {
    return this.httpClient.post<Person>('http://localhost:8080/persons', person);
  }

  getHeaders() {
    const username = 'admin';
    const password = 'password';
    return 'Basic ' + window.btoa(username + ':' + password);
  }

}
