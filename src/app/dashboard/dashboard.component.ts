import { Component } from '@angular/core';
import { DashboardCard } from '../model/dashboardCard';

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

  constructor(){
    this.dashBoardCardQtdDisp = new DashboardCard("Quantidade de Jogos Disponiveis", "XX");
    this.dashBoardCardTotalBaixado = new DashboardCard("Total Jogos baixados", "XX");
    this.dashBoardCardUsuariosAtivos = new DashboardCard("Usuários Adm Ativos", "XX");
    this.date = new Date();
  }

}
