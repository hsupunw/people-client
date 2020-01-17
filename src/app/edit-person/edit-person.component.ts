import {Component, Input, OnInit} from '@angular/core';
import {HttpClientService, Person} from '../service/httpclient.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  @Input()
  person: Person;
  hobbyString: string;

  constructor(private httpClientService: HttpClientService) {
    this.person = history.state.data.person;
  }

  ngOnInit() {
    this.hobbyString = this.person.hobby.toString();
  }

  updatePerson(): void {
    this.person.hobby = this.hobbyString.split(',');
    this.httpClientService.createPerson(this.person)
      .subscribe(data => {
        alert('Person updated successfully.');
      });
  }
}
