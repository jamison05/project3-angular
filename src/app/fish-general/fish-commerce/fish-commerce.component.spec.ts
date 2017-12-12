import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishCommerceComponent } from './fish-commerce.component';

describe('FishCommerceComponent', () => {
  let component: FishCommerceComponent;
  let fixture: ComponentFixture<FishCommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishCommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
