import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditTrajetPage } from './edit-trajet.page';

describe('EditTrajetPage', () => {
  let component: EditTrajetPage;
  let fixture: ComponentFixture<EditTrajetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTrajetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditTrajetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
