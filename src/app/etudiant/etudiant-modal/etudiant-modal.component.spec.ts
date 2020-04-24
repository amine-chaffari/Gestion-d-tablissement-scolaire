import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantModalComponent } from './etudiant-modal.component';

describe('EtudiantModalComponent', () => {
  let component: EtudiantModalComponent;
  let fixture: ComponentFixture<EtudiantModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
