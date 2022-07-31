import { TestBed } from '@angular/core/testing';

import { ManageBeehivesService } from './manage-beehives.service';

describe('ManageBeehivesService', () => {
  let service: ManageBeehivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageBeehivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
