import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeFraisPage } from './liste-frais.page';

describe('ListeFraisPage', () => {
  let component: ListeFraisPage;
  let fixture: ComponentFixture<ListeFraisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFraisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeFraisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
