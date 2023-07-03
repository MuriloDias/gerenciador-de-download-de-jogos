import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { WebStorage } from '../DB/WebStorage';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  imageURL: string = "../../assets/arrows-abstract-4k.jpg";
  login!: string;
  senha!: string;
  user!: User;
  webStorage = new WebStorage();
  @Output() usuarioLogado = new EventEmitter<User>();
  isLogado: String;

  constructor(private route: ActivatedRoute, private router: Router){
    this.isLogado = this.webStorage.consultarObjetoNoWebStorage("isLogado");
  }

  async onLogin() : Promise<void>{
    const usuariosConsultados = await obterDadosDoJSON();
    let listaUsuariosAtivos: User[] = [];
    if(usuariosConsultados != null){
      listaUsuariosAtivos = usuariosConsultados;
    }

    let logou: boolean = false;
    for (let i = 0; i < listaUsuariosAtivos.length; i++) {
      const user = listaUsuariosAtivos[i];
      if(user.login == this.login && user.password == this.senha && user.ativo == true){
        this.user = user;
        this.usuarioLogado.emit(this.user);
        logou = true;
        this.router.navigate(['/dashboard']);
        this.webStorage.salvarObjetoNoWebStorage("isLogado", user.username);
        break;
      }
    }
    if(!logou){
      window.alert("senha incorreta");
      this.router.navigate(['/login']);
    }
  }
}
async function obterDadosDoJSON(): Promise<any> {
  try {
    const response = await axios.get('/api/User');
    const dados = response.data;
    return dados;
  } catch (error) {
    console.error('Erro ao obter dados do JSON:', error);
    return null;
  }
}
