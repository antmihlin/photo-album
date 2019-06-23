import { TestBed } from '@angular/core/testing';
import { HttpClientModule,  } from '@angular/common/http';

import { JsonPlaceholderService } from './json-placeholder.service';

describe('JsonPlaceholderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: JsonPlaceholderService = TestBed.get(JsonPlaceholderService);
    expect(service).toBeTruthy();
  });
});
