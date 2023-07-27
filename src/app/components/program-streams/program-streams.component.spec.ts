import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramStreamsComponent } from './program-streams.component';

describe('ProgramStreamsComponent', () => {
  let component: ProgramStreamsComponent;
  let fixture: ComponentFixture<ProgramStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramStreamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
