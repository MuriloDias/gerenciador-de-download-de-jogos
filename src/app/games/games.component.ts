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

  constructor(private route: ActivatedRoute, private router: Router){
    this.carregarJogos();
  }

  getBackgroudImage() {
    return {
      'background-image':
        'linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .9)), url(' +
        this.imageURL + ')',
    };
  }

  ngOnInit(): void{}

  async carregarJogos() {
    try {
      const response = await axios.get('http://localhost:3000/game');
      this.games = response.data;
    } catch (error) {
      console.error('Erro ao carregar jogos:', error);
    }
  }
}

