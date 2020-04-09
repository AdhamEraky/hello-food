import { TestBed } from '@angular/core/testing';

import { ProductListService } from './products/components/product-list/product-list.service';

describe('ProductListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductListService = TestBed.get(ProductListService);
    expect(service).toBeTruthy();
  });
});
