import { Component } from '@angular/core';
import { DashboardCard } from '../model/dashboardCard';
import { WebStorage } from '../DB/WebStorage';
import { User } from '../model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dashBoardCardQtdDisp: DashboardCard;
  dashBoardCardTotalBaixado: DashboardCard;
  dashBoardCardUsuariosAtivos: DashboardCard;
  date: Date;
  webStorage = new WebStorage();

  constructor(){
    let qtdUsuarios = this.webStorage.consultarObjetoNoWebStorage("listaUsuariosAtivos");
    let qtdUsuariosAtivos = this.calculaQuantidadeUsuariosAtivos(qtdUsuarios);
    this.dashBoardCardQtdDisp = new DashboardCard("Quantidade de Jogos Disponiveis", "XX");
    this.dashBoardCardTotalBaixado = new DashboardCard("Total Jogos baixados", "XX");
    this.dashBoardCardUsuariosAtivos = new DashboardCard("Usuários Ativos", qtdUsuariosAtivos.toString());
    this.date = new Date();
  }

  calculaQuantidadeUsuariosAtivos(users: User[]) : Number{
    let qtdAtivos = 0
    for (let user of users) {
      if(user.ativo){
        qtdAtivos += 1;
      }
    }
    return qtdAtivos;
  }
}
