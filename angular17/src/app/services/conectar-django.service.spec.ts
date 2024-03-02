import { TestBed } from '@angular/core/testing';

import { ConectarDjangoService } from './conectar-django.service';

describe('ConectarDjangoService', () => {
  let service: ConectarDjangoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectarDjangoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
