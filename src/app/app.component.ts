import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}
  self = this;
  people: Observable<any[]>;
  gender: String;
  males = [];
  females = [];

  loadPeople() {
    this.people = this.appService.getPeople();
    this.people.forEach(parentElement => {
      parentElement.forEach(childElement => {
        if (childElement.gender === 'Male') {
          this.males.push(childElement);
        }else {
          this.females.push(childElement);
        }
      });
    });
  }

  ngOnInit() {
    this.loadPeople();
  }
}
