import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsComponent } from './pets.component';
import { PetComponent } from '../pet/pet.component';

describe('PetsComponent', () => {
  let component: PetsComponent;
  let fixture: ComponentFixture<PetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsComponent, PetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsComponent);
    component = fixture.componentInstance;
    component.person = {'name': '', 'gender': '', 'age': 0, 'pets': [] };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
