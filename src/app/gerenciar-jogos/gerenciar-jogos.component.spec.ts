import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarJogosComponent } from './gerenciar-jogos.component';

describe('GerenciarJogosComponent', () => {
  let component: GerenciarJogosComponent;
  let fixture: ComponentFixture<GerenciarJogosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciarJogosComponent]
    });
    fixture = TestBed.createComponent(GerenciarJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
