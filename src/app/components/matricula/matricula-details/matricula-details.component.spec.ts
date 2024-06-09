import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaDetailsComponent } from './matricula-details.component';

describe('MatriculaDetailsComponent', () => {
  let component: MatriculaDetailsComponent;
  let fixture: ComponentFixture<MatriculaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatriculaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatriculaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
