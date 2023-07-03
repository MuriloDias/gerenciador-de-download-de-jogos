import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebStorage } from '../DB/WebStorage';
import axios from 'axios';
import { Game } from '../model/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit{
  popularGames = "Destaques";
  imageURL: string = "../../assets/arrows-abstract-4k.jpg";
  webStorage = new WebStorage();
  isLogado: String = "Login";
  games: Game[] = [];
  subGames: Game[] = [];
  gerenciarGames: Game[] = [];

  constructor(private route: ActivatedRoute, private router: Router){
  }

  getBackgroudImage() {
    return {
      'background-image':
        'linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .9)), url(' +
        this.imageURL + ')',
    };
  }

  async ngOnInit(): Promise<void>{
    await this.carregarJogos();
    this.gerenciarJogos();
  }

  async carregarJogos() {
    try {
      const response = await axios.get('/api/game');
      this.gerenciarGames = response.data;
    } catch (error) {
      console.error('Erro ao carregar jogos:', error);
    }
  }

  gerenciarJogos(){
    this.gerenciarGames.forEach((game) => {
      if (this.games.length < 3) {
        this.games.push(game);
      }else{
        this.subGames.push(game);
      }
    });
    console.log("teste");
  }
}

