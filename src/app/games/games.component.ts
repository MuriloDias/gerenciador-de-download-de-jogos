import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebStorage } from '../DB/WebStorage';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit{
  //Substitui a lista com os jogos
  popularGames = "Lista dos Jogos populares! teste de input";
  imageURL: string = "../../assets/arrows-abstract-4k.jpg";
  webStorage = new WebStorage();
  isLogado: String = "Login";

  constructor(private route: ActivatedRoute, private router: Router){
    //carrega se está logado

  }

  getBackgroudImage() {
    return {
      'background-image':
        'linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .9)), url(' +
        this.imageURL + ')',
    };
  }

  ngOnInit(): void{}
}
