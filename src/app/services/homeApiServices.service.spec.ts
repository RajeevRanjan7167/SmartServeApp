/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomeApiServicesService } from './homeApiServices.service';

describe('Service: HomeApiServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeApiServicesService]
    });
  });

  it('should ...', inject([HomeApiServicesService], (service: HomeApiServicesService) => {
    expect(service).toBeTruthy();
  }));
});
