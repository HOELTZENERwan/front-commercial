import { TestBed } from '@angular/core/testing';

import { TransfertServiceService } from './transfert-service.service';

describe('TransfertSserviceService', () => {
  let service: TransfertServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransfertServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
