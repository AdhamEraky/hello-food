import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowedProductComponent } from './showed-product.component';

describe('ShowedProductComponent', () => {
  let component: ShowedProductComponent;
  let fixture: ComponentFixture<ShowedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
