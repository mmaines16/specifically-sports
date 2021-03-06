import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostComponent } from './post.component';

describe('PostComponent', () => {
  let component: AdminPostComponent;
  let fixture: ComponentFixture<AdminPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
