import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeModalComponent } from './groupe-modal.component';

describe('GroupeModalComponent', () => {
  let component: GroupeModalComponent;
  let fixture: ComponentFixture<GroupeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
