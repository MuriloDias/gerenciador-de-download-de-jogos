import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  enderecoLogo = "../../assets/logo.PNG";
  login = "Admin";
  nomeJogoPesquisado = "Pesquisar";

  onLogin() : void{
    //realiza login
    window.alert("tentativa de login");
    //login = "Nome do usuário logado";
  }

}


