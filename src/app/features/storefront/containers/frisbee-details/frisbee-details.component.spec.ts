import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrisbeeDetailsComponent } from './frisbee-details.component';

describe('FrisbeeDetailsComponent', () => {
  let component: FrisbeeDetailsComponent;
  let fixture: ComponentFixture<FrisbeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrisbeeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrisbeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
