import { Component } from '@angular/core';
import { User } from '../model/user';
import { WebStorage } from '../DB/WebStorage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  usuaroLogado!: User;
  enderecoLogo = "../../assets/logo.PNG";
  nomeJogoPesquisado = "Pesquisar";
  name = 'Angular';
  public isCollapsed = true;
  hiddenPesquisar = false;
  hiddenLogin = false;
  valuePesquisar : string = "";
  webStorage = new WebStorage();
  isLogado: String = "Login";

  constructor(private route: ActivatedRoute, private router: Router){
    //carrega se está logado
    this.isLogado = this.webStorage.consultarObjetoNoWebStorage("isLogado");
    if(this.isLogado === undefined){
      this.router.navigate(['/']);
      this.isLogado = "Login";
      this.hiddenLogin = false;
    }
  }

  deslogar(){
    this.webStorage.salvarObjetoNoWebStorage("isLogado", undefined);
    this.router.navigate(['/']);
    this.isLogado = "Login";
    this.hiddenLogin = false;
  }

}


