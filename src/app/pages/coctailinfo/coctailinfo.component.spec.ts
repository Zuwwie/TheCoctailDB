import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailinfoComponent } from './coctailinfo.component';

describe('CoctailinfoComponent', () => {
  let component: CoctailinfoComponent;
  let fixture: ComponentFixture<CoctailinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoctailinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctailinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
