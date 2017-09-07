import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}
  people: Observable<any[]>;

  loadPeople() {
    this.people = this.appService.getPeople();
    console.log(this.people);
  }

  ngOnInit() {
    this.loadPeople();
  }
}
