import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolStudentListComponent } from './school-student-list.component';

describe('SchoolStudentListComponent', () => {
  let component: SchoolStudentListComponent;
  let fixture: ComponentFixture<SchoolStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolStudentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
