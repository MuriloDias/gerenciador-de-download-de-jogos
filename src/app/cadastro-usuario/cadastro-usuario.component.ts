import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/user';
import { WebStorage } from '../DB/WebStorage';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  userForm: FormGroup;
  webStorage = new WebStorage();

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.userForm = this.formBuilder.group({
      nome: ['', Validators.required],
      login: ['', Validators.required],
      senha: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/)]],
      ativo: [false]
    });
  }

  submitForm() {
    try {
      if (this.userForm.valid) {
        const userData = this.userForm.value;
        const ativoValue = userData.ativo === 'true';

        const userModel = new User(
          userData.nome,
          userData.login,
          userData.senha,
          ativoValue
        );

        inserirUsuario(userModel)
        .then((data) => {
          console.log('Usuário inserido:', data);
        })
        .catch((error) => {
          console.error('Erro ao inserir usuário:', error);
        });
        window.alert('Usuario salvo com sucesso!');
        this.router.navigate(['/gerenciarUsuarios']);
      }
    } catch (e) {
      window.alert('Erro ao salvar usuario!');
    }
  }
}
async function inserirUsuario(usuario: any): Promise<any> {
  try {
    const response = await axios.post('http://localhost:3000/user', usuario);
    return response.data;
  } catch (error) {
    console.error('Erro ao inserir usuário:', error);
    return null;
  }
}
