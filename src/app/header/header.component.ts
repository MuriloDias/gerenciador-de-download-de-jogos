import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  usuaroLogado!: User;
  enderecoLogo = "../../assets/logo.PNG";
  login = "Admin";
  nomeJogoPesquisado = "Pesquisar";
  name = 'Angular';
  public isCollapsed = true;
  hiddenPesquisar = false;
  hiddenLogin = false;
  hiddenLogout = true;
  valuePesquisar : string = ""

  usuarioLogado(user: User): void{
    
  }

}


