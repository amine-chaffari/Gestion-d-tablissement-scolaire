import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantModalComponent } from './enseignant-modal.component';

describe('EnseignantModalComponent', () => {
  let component: EnseignantModalComponent;
  let fixture: ComponentFixture<EnseignantModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
