import { Component, OnInit } from '@angular/core';
import { DashboardCard } from '../model/dashboardCard';
import { WebStorage } from '../DB/WebStorage';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  dashBoardCardQtdDisp: DashboardCard;
  dashBoardCardTotalBaixado: DashboardCard;
  dashBoardCardUsuariosAtivos!: DashboardCard;
  date: Date;
  listaUsuariosAtivos: User[] = [];
  webStorage = new WebStorage();
  isLogado: String;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router){
    this.dashBoardCardQtdDisp = new DashboardCard("Quantidade de Jogos Disponiveis", "XX");
    this.dashBoardCardTotalBaixado = new DashboardCard("Total Jogos baixados", "XX");
    this.date = new Date();

    //carrega se está logado
    this.isLogado = this.webStorage.consultarObjetoNoWebStorage("isLogado");
    if(this.isLogado === undefined){
      this.router.navigate(['/']);
    }
  }
  ngOnInit(): void {
    this.inicializarDashboard();
  }



  inicializarDashboard() {
    this.carregarUsuarios().subscribe(
      (listaUsuarios) => {
        this.listaUsuariosAtivos = listaUsuarios;
        let qtdUsuariosAtivos = this.calculaQuantidadeUsuariosAtivos(this.listaUsuariosAtivos);
        this.dashBoardCardUsuariosAtivos = new DashboardCard("Usuários Ativos", qtdUsuariosAtivos.toString());
      },
      (error) => {
        console.error('Erro ao inicializar dashboard:', error);
        window.alert("Erro ao usar Observable para carregar os dados do usuário");
      }
    );
  }

  carregarUsuarios(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/user');
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

