import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ClientsPage } from './clients.page';

describe('ClientsPage', () => {
  let component: ClientsPage;
  let fixture: ComponentFixture<ClientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
