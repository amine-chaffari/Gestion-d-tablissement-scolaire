import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereModalComponent } from './matiere-modal.component';

describe('MatiereModalComponent', () => {
  let component: MatiereModalComponent;
  let fixture: ComponentFixture<MatiereModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatiereModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
