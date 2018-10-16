import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialwrapComponent } from './materialwrap.component';

describe('MaterialwrapComponent', () => {
  let component: MaterialwrapComponent;
  let fixture: ComponentFixture<MaterialwrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialwrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialwrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
