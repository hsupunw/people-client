import {Component, OnInit} from '@angular/core';
import {HttpClientService, Person} from '../service/httpclient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[];

  constructor(private httpClientService: HttpClientService, private router: Router) {
  }

  ngOnInit() {
    this.httpClientService.getPersons().subscribe(
      response => this.handleSuccessfulResponse(response._embedded.persons),
    );
  }

  handleSuccessfulResponse(response) {
    this.persons = response;
  }

  deletePerson(person: Person): void {
    this.httpClientService.deletePerson(person)
      .subscribe(data => {
        this.persons = this.persons.filter(u => u !== person);
      });
  }

  editPerson(person: Person) {
    this.router.navigate(['edit-person'],
      {
        state:
          {
            data:
              {
                person
              }
          }
      })
      .then(r => console.log('edit'));
  }
}
