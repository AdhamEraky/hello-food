import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEmptyPageComponent } from './product-empty-page.component';

describe('ProductEmptyPageComponent', () => {
  let component: ProductEmptyPageComponent;
  let fixture: ComponentFixture<ProductEmptyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEmptyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEmptyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
