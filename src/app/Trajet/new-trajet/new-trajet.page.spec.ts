import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTrajetPage } from './new-trajet.page';

describe('NewTrajetPage', () => {
  let component: NewTrajetPage;
  let fixture: ComponentFixture<NewTrajetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrajetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTrajetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
