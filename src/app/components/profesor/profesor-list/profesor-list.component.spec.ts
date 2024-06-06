import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorsListComponent } from './profesor-list.component';

describe('ProfesorsListComponent', () => {
  let component: ProfesorsListComponent;
  let fixture: ComponentFixture<ProfesorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfesorsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfesorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
