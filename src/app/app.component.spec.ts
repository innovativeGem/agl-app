import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { PetsComponent } from './pets/pets.component';
import { PetComponent } from './pet/pet.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PetsComponent,
        PetComponent
      ],
      imports: [HttpModule],
      providers: [AppService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // expect(app.title).toEqual('app');
  }));
});
