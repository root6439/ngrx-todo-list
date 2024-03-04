import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompleteTodosComponent } from './incomplete-todos.component';

describe('IncompleteTodosComponent', () => {
  let component: IncompleteTodosComponent;
  let fixture: ComponentFixture<IncompleteTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncompleteTodosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncompleteTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
