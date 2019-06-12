import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZestSelectComponent } from './zest-select.component';

describe('ZestSelectComponent', () => {
  let component: ZestSelectComponent;
  let fixture: ComponentFixture<ZestSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZestSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZestSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
