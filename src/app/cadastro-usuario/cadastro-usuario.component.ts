import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/user';
import { WebStorage } from '../DB/WebStorage';
import { ActivatedRoute, Router } from '@angular/router';

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
        console.log(userData);
  
        const userModel = new User(
          userData.nome,
          userData.login,
          userData.senha,
          userData.ativo
        );
        let usuariosConsultados = this.webStorage.consultarObjetoNoWebStorage('listaUsuariosAtivos');
        let listaUsuariosAtivos: User[] = [];
        if(usuariosConsultados != null){
          listaUsuariosAtivos = usuariosConsultados;
        }
        listaUsuariosAtivos.push(userModel);
        this.webStorage.salvarObjetoNoWebStorage('listaUsuariosAtivos', listaUsuariosAtivos);
        window.alert("Usuario salvo com sucesso!");
        this.router.navigate(['/gerenciarUsuarios']);
      }
    } catch (e) {
        window.alert("Erro ao salvar usuario!");
    }

    }
}
