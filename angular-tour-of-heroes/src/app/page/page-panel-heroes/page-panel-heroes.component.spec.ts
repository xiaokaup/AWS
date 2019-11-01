import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePanelHeroesComponent } from './page-panel-heroes.component';

describe('PagePanelHeroesComponent', () => {
  let component: PagePanelHeroesComponent;
  let fixture: ComponentFixture<PagePanelHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePanelHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePanelHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
