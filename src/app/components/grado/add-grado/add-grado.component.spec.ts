import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGradoComponent } from './add-grado.component';

describe('AddGradoComponent', () => {
  let component: AddGradoComponent;
  let fixture: ComponentFixture<AddGradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddGradoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
