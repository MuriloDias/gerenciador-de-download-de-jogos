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
  userAdm!: User;
  webStorage = new WebStorage();
  @Output() usuarioLogado = new EventEmitter<User>();

  constructor(private route: ActivatedRoute, private router: Router){
    let userAdmin: User = new User("admin", "admin", "admin", true);
    let listaUsuariosAtivos: User[] = [];
    listaUsuariosAtivos.push(userAdmin);
    this.webStorage.salvarObjetoNoWebStorage('listaUsuariosAtivos', listaUsuariosAtivos);
    this.userAdm = userAdmin;
  }

  async onLogin() : Promise<void>{
    //let usuariosConsultados = this.webStorage.consultarObjetoNoWebStorage('listaUsuariosAtivos');
    const usuariosConsultados = await obterDadosDoJSON();
    let listaUsuariosAtivos: User[] = [];
    if(usuariosConsultados != null){
      listaUsuariosAtivos = usuariosConsultados;
    }
    listaUsuariosAtivos.forEach((user: User) => {
      if(user.login == this.login && user.password == this.senha && user.ativo == true){
        this.user = user;
        this.usuarioLogado.emit(this.user);
        this.router.navigate(['/dashboard']);
      }else{
        window.alert("senha incorreta");
      }
    });
  }
}
async function obterDadosDoJSON(): Promise<any> {
  try {
    const response = await axios.get('http://localhost:3000/User');
    const dados = response.data;
    return dados;
  } catch (error) {
    console.error('Erro ao obter dados do JSON:', error);
    return null;
  }
}
