import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatriculaComponent } from './add-matricula.component';

describe('AddMatriculaComponent', () => {
  let component: AddMatriculaComponent;
  let fixture: ComponentFixture<AddMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMatriculaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
