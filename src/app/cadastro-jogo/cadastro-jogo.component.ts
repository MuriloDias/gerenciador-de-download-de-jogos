import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Game } from '../model/game';
import { WebStorage } from '../DB/WebStorage';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-cadastro-jogo',
  templateUrl: './cadastro-jogo.component.html',
  styleUrls: ['./cadastro-jogo.component.css']
})
export class CadastroJogoComponent {

  gameForm: FormGroup;
  webStorage = new WebStorage();

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.gameForm = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      linkDown: ['', Validators.required],
      linkImg: ['', Validators.required]
    });
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

        inserirJogo(gameModel)
        .then((data) => {
          console.log('Jogo inserido:', data);
        })
        .catch((error) => {
          console.error('Erro ao inserir Jogo:', error);
        });
        window.alert('Jogo salvo com sucesso!');
        this.router.navigate(['/gerenciarJogos']);
      }
    } catch (e) {
      window.alert('Erro ao salvar jogo!');
    }
  }
}
async function inserirJogo(jogo: any): Promise<any> {
  try {
    const response = await axios.post('/api/game', jogo);
    return response.data;
  } catch (error) {
    console.error('Erro ao inserir jogo:', error);
    return null;
  }

}
