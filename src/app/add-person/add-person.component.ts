import {Component, OnInit} from '@angular/core';
import {HttpClientService, Person} from '../service/httpclient.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  person: Person = new Person(null, '', '', 25, '', []);
  hobbyString = '';

  constructor(private httpClientService: HttpClientService) {
  }

  ngOnInit() {
  }

  createPerson(): void {
    this.person.hobby = this.hobbyString.split(',');
    this.httpClientService.createPerson(this.person)
      .subscribe(data => {
        alert('Person created successfully.');
      });
  }

}
