import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaytwoComponentComponent } from './daytwo-component.component';

describe('DaytwoComponentComponent', () => {
  let component: DaytwoComponentComponent;
  let fixture: ComponentFixture<DaytwoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaytwoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DaytwoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
