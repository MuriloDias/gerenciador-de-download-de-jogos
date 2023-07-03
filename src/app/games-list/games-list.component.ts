import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../model/game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent {
  //Substitui a lista com os jogos
  @Input() subGames: Game[] = [];
  recentGames = "Lista dos Jogos recentes";

  ngOnInit() { 
    //window.alert(this.popularGames);//<-----------confirmação de chegada
  }
}
