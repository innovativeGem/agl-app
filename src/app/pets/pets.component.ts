import { Component, Input, ɵEMPTY_ARRAY, Optional, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  @Input() person: {'name': String, 'gender': String, 'age': Number, 'pets': any[] };
  pets = [];
  cats = [];

  constructor() { }

  ngOnInit() {
    const self = this;
    this.pets = self.person.pets;
    if (this.pets !== null) {
      this.pets.forEach(pet => {
        if (pet.type === 'Cat') {
          this.cats.push(pet);
        }
      });
    }
  }

}
