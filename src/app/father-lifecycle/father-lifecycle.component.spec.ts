import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherLifecycleComponent } from './father-lifecycle.component';

describe('FatherLifecycleComponent', () => {
  let component: FatherLifecycleComponent;
  let fixture: ComponentFixture<FatherLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherLifecycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatherLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
