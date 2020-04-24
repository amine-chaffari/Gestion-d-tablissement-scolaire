import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadreModalComponent } from './cadre-modal.component';

describe('CadreModalComponent', () => {
  let component: CadreModalComponent;
  let fixture: ComponentFixture<CadreModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadreModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
