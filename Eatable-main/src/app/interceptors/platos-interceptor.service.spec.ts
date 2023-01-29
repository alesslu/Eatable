import { TestBed } from '@angular/core/testing';

import { PlatosInterceptorService } from './platos-interceptor.service';

describe('PlatosInterceptorService', () => {
  let service: PlatosInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatosInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
