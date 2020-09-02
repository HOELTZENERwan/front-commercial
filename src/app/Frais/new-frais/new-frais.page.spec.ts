import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewFraisPage } from './new-frais.page';

describe('NewFraisPage', () => {
  let component: NewFraisPage;
  let fixture: ComponentFixture<NewFraisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFraisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewFraisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
