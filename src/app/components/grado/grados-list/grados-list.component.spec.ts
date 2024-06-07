import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradosListComponent } from './grados-list.component';

describe('GradosListComponent', () => {
  let component: GradosListComponent;
  let fixture: ComponentFixture<GradosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradosListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
