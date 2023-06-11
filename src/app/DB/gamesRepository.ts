import { Game } from "../model/game";

export class GamesRepository{
    games!: Game[];

    constructor(){
        let game1: Game = new Game("Jogo 1", "Descrição jogo 1", "linkDown1", "linkImg1");
        let game2: Game = new Game("Jogo 2", "Descrição jogo 2", "linkDown2", "linkImg2");
        let game3: Game = new Game("Jogo 3", "Descrição jogo 3", "linkDown3", "linkImg3");
        let game4: Game = new Game("Jogo 4", "Descrição jogo 4", "linkDown4", "linkImg4");
        this.games.push(game1);
        this.games.push(game2);
        this.games.push(game3);
        this.games.push(game4);
    }
}