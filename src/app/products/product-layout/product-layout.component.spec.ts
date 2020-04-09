import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLayOutComponent } from './product-layout.component';

describe('MotherProductComponent', () => {
  let component: ProductLayOutComponent;
  let fixture: ComponentFixture<ProductLayOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLayOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLayOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
