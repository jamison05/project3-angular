import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegulationComponent } from './user-regulation.component';

describe('UserRegulationComponent', () => {
  let component: UserRegulationComponent;
  let fixture: ComponentFixture<UserRegulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
