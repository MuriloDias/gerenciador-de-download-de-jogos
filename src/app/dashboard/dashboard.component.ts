import { Component } from '@angular/core';
import { DashboardCard } from '../model/dashboardCard';
import { WebStorage } from '../DB/WebStorage';
import { User } from '../model/user';
import axios from 'axios';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dashBoardCardQtdDisp: DashboardCard;
  dashBoardCardTotalBaixado: DashboardCard;
  dashBoardCardUsuariosAtivos!: DashboardCard;
  date: Date;
  listaUsuariosAtivos: User[] = [];
  webStorage = new WebStorage();
  isLogado: String;

  constructor(private route: ActivatedRoute, private router: Router){
    this.dashBoardCardQtdDisp = new DashboardCard("Quantidade de Jogos Disponiveis", "XX");
    this.dashBoardCardTotalBaixado = new DashboardCard("Total Jogos baixados", "XX");
    this.date = new Date();

    //carrega se está logado
    this.isLogado = this.webStorage.consultarObjetoNoWebStorage("isLogado");
    if(this.isLogado === undefined){
      this.router.navigate(['/']);
    }
    this.inicializarDashboard();
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


  async inicializarDashboard() {
    try {
      let qtdConsultada = await this.carregarUsuarios();
      let qtdUsuariosAtivos = this.calculaQuantidadeUsuariosAtivos(qtdConsultada);
      this.dashBoardCardUsuariosAtivos = new DashboardCard("Usuários Ativos", qtdUsuariosAtivos.toString());
    } catch (error) {
      console.error('Erro ao inicializar dashboard:', error);
    }
  }

  async carregarUsuarios(): Promise<User[]> {
    try {
      const response = await axios.get('http://localhost:3000/user');
      const listaUsuarios: User[] = response.data;
      return listaUsuarios;
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
      throw error; // Lança o erro para que possa ser tratado externamente
    }
  }
}

