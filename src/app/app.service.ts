import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';


@Injectable()
export class AppService {
  constructor (private http: Http) {}

  getPeople() {
    return this.http.get(`http://agl-developer-test.azurewebsites.net/people.json`)
    .map((res: Response) => res.json());
  }
}
