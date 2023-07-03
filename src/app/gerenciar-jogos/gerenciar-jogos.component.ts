import { Component } from '@angular/core';
import {Game} from '../model/game';
import { WebStorage } from '../DB/WebStorage';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-gerenciar-jogos',
  templateUrl: './gerenciar-jogos.component.html',
  styleUrls: ['./gerenciar-jogos.component.css']
})
export class GerenciarJogosComponent {
  listaJogos: Game[] = [];
  webStorage = new WebStorage();

  constructor(private route: ActivatedRoute, private router: Router){
    this.carregarJogos();
  }

  async carregarJogos() {
    try {
      const response = await axios.get('/api/game');
      this.listaJogos = response.data;
    } catch (error) {
      console.error('Erro ao carregar jogos:', error);
    }
  }

  async remover(id: any) {
    await removerJogo(id);
    this.carregarJogos();
  }

  editar(id: number): void {
    this.router.navigate(['/editarJogos', id]);
  }
}

async function removerJogo(id: any): Promise<void> {
  try{
    await axios.delete('/api/game/' + id);
    window.alert('Jogo removido com sucesso!');
  } catch (error) {
    console.error('Erro ao remover jogo', error);
  }
}
