import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Game } from '../model/game';
import { WebStorage } from '../DB/WebStorage';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-editar-jogo',
  templateUrl: './editar-jogo.component.html',
  styleUrls: ['./editar-jogo.component.css']
})
export class EditarJogoComponent implements OnInit{
  gameForm: FormGroup;
  webStorage = new WebStorage();

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.gameForm = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      linkDown: ['', Validators.required],
      linkImg: ['', Validators.required],
      id: [{ value: '', disabled: true }],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(async (params) => {
      const id = Number(params.get('id'));

      let game: Game | null = null;
      if (id !== null) {
        game = await this.getGameByUserName(id);
      }

      if (game) {
        this.gameForm.patchValue({
          nome: game.nome,
          descricao: game.descricao,
          linkDown: game.linkDown,
          linkImg: game.linkImg,
          id: game.id,
        });
      }
    });
  }

  async getGameByUserName(id: number): Promise<Game> {
    const url = `/api/game?id=${id}`;
    try {
      const response = await axios.get(url);
      const users: Game[] = response.data;
      if (users.length > 0) {
        return users[0];
      } else {
        throw new Error('Game not found');
      }
    } catch (error) {
      console.error('Erro ao obter game:', error);
      throw error;
    }
  }

  submitForm() {
    try {
      if (this.gameForm.valid) {
        const gameData = this.gameForm.value;

        const gameModel = new Game(
          gameData.nome,
          gameData.descricao,
          gameData.linkDown,
          gameData.linkImg
        );

        const id = this.gameForm.get('id')?.value;

        updateGame(id, gameModel)
        .then((data) => {
          console.log('Jogo atualizado:', data);
        })
        .catch((error) => {
          console.error('Erro ao atualizar Jogo:', error);
        });
        window.alert('Jogo atualizado com sucesso!');
        this.router.navigate(['/gerenciarJogos']);
      }
    } catch (e) {
      window.alert('Erro ao atualizar jogo!');
    }
  }
}
async function updateGame(id: any, updatedGame: Game): Promise<Game> {
  const url = '/api/game/'.concat(id);
  try {
    const response = await axios.put(url, updatedGame);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar game:', error);
    throw error;
  }
}
