import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormComponent } from './app-form.component';

describe('AppFormComponent', () => {
  let component: AppFormComponent;
  let fixture: ComponentFixture<AppFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppFormComponent]
    });
    fixture = TestBed.createComponent(AppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
