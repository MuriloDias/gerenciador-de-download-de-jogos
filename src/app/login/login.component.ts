import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';

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
  listaUsuariosAtivos!: User[];
  @Output() usuarioLogado = new EventEmitter<User>();

  constructor(private route: ActivatedRoute, private router: Router){
    let userAdmin: User = new User("admin", "admin", "admin");//<--------------------usuario e senha admin
    this.userAdm = userAdmin;
  }

  onLogin() : void{
    //realiza login
    //Consulta usuário existente
    //user = consultaUsuário(this.login, this.senha);
    //if(user.existente){
    if(this.userAdm.login == this.login && this.userAdm.password == this.senha){
      this.user = this.userAdm;
      this.usuarioLogado.emit(this.user);
      this.router.navigate(['/dashboard']);
    }else{
      window.alert("senha incorreta");
    }
  }
}
