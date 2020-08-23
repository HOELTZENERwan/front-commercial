import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TrajetsPage } from './trajets.page';

describe('TrajetsPage', () => {
  let component: TrajetsPage;
  let fixture: ComponentFixture<TrajetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrajetsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TrajetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
