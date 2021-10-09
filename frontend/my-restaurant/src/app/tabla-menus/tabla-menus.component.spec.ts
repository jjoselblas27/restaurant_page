import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMenusComponent } from './tabla-menus.component';

describe('TablaMenusComponent', () => {
  let component: TablaMenusComponent;
  let fixture: ComponentFixture<TablaMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
