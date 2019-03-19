import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotestservicesComponent } from './totestservices.component';

describe('TotestservicesComponent', () => {
  let component: TotestservicesComponent;
  let fixture: ComponentFixture<TotestservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotestservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotestservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
