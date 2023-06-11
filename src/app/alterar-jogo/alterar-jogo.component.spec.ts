import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarJogoComponent } from './alterar-jogo.component';

describe('AlterarJogoComponent', () => {
  let component: AlterarJogoComponent;
  let fixture: ComponentFixture<AlterarJogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterarJogoComponent]
    });
    fixture = TestBed.createComponent(AlterarJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
