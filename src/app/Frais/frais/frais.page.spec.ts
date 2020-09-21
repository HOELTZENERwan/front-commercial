import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FraisPage } from './frais.page';

describe('FraisPage', () => {
  let component: FraisPage;
  let fixture: ComponentFixture<FraisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FraisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
