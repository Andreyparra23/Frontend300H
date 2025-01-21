import { TestBed } from '@angular/core/testing';
import { ModelLicores } from '../interfaces/model-licores';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ProductsService] });
    service = TestBed.inject(ProductsService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
