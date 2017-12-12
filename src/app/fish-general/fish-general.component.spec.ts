import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishGeneralComponent } from './fish-general.component';

describe('FishGeneralComponent', () => {
  let component: FishGeneralComponent;
  let fixture: ComponentFixture<FishGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
