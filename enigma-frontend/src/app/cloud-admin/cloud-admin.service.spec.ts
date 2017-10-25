import { TestBed, inject } from '@angular/core/testing';

import { CloudAdminService } from './cloud-admin.service';

describe('CloudAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloudAdminService]
    });
  });

  it('should be created', inject([CloudAdminService], (service: CloudAdminService) => {
    expect(service).toBeTruthy();
  }));
});
