import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchCoordinatorDashboardComponent } from './batch-coordinator-dashboard.component';

describe('BatchCoordinatorDashboardComponent', () => {
  let component: BatchCoordinatorDashboardComponent;
  let fixture: ComponentFixture<BatchCoordinatorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatchCoordinatorDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatchCoordinatorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
