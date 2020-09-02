import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditFraisPage } from './edit-frais.page';

describe('EditFraisPage', () => {
  let component: EditFraisPage;
  let fixture: ComponentFixture<EditFraisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFraisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditFraisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
