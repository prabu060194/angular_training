import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayhistoryComponent } from './playhistory.component';

describe('PlayhistoryComponent', () => {
  let component: PlayhistoryComponent;
  let fixture: ComponentFixture<PlayhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
