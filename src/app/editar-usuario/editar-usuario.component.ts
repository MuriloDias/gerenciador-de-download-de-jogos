import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,RouterModule } from '@angular/router';
import { User } from '../model/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      nome: ['', Validators.required],
      login: ['', Validators.required],
      senha: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/),
        ],
      ],
      ativo: [ , Validators.required],
      id: [{ value: '', disabled: true }],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(async (params) => {
      const id = Number(params.get('id'));

      let user: User | null = null;
      if (id !== null) {
        user = await this.getUserByUserName(id);
      }

      if (user) {
        this.userForm.patchValue({
          nome: user.username,
          login: user.login,
          senha: user.password,
          ativo: user.ativo,
          id: user.id,
        });

        // this.userForm.get('ativo')?.valueChanges.subscribe(value => {
        //   this.user.ativo = value;
        // });
      }
    });
  }

  async getUserByUserName(id: number): Promise<User> {
    const url = `http://localhost:3000/user?id=${id}`;
    try {
      const response = await axios.get(url);
      const users: User[] = response.data;
      if (users.length > 0) {
        return users[0];
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      console.error('Erro ao obter usuário:', error);
      throw error;
    }
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

        const id = this.userForm.get('id')?.value;
  
        updateUser(id, userModel)
          .then((updatedUser) => {
            console.log('Usuário atualizado:', updatedUser);
            window.alert('Usuário atualizado com sucesso!');
            this.router.navigate(['/gerenciarUsuarios']);
          })
          .catch((error) => {
            console.error('Erro ao atualizar usuário:', error);
            window.alert('Erro ao atualizar usuário!');
          });
      }
    } catch (e) {
      window.alert('Erro ao atualizar usuário!');
    }
  }
  
}
async function updateUser(id: any, updatedUser: User): Promise<User> {
  const url = 'http://localhost:3000/user/'.concat(id);
  try {
    const response = await axios.put(url, updatedUser);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    throw error;
  }
}
