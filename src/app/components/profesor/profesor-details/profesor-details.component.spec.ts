import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorDetailsComponent } from './profesor-details.component';

describe('ProfesorDetailsComponent', () => {
  let component: ProfesorDetailsComponent;
  let fixture: ComponentFixture<ProfesorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfesorDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfesorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
