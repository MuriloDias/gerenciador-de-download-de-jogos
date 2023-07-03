import { Component, OnInit } from '@angular/core';
import { DashboardCard } from '../model/dashboardCard';
import { WebStorage } from '../DB/WebStorage';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../model/game';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  dashBoardCardQtdGames!: DashboardCard;
  dashBoardCardUsuariosAtivos!: DashboardCard;
  date: Date;
  listaUsuariosAtivos: User[] = [];
  listaGamesAtivos: Game[] = [];
  webStorage = new WebStorage();
  isLogado: String;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router){
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

    this.carregarJogos().subscribe(
      (listaGames) => {
        this.listaGamesAtivos = listaGames;
        this.dashBoardCardQtdGames = new DashboardCard("Quantidade de Jogos Disponiveis", this.listaGamesAtivos.length.toString());
      },
      (error) => {
        console.error('Erro ao inicializar dashboard:', error);
        window.alert("Erro ao usar Observable para carregar os dados dos games");
      }
    );
  }

  carregarUsuarios(): Observable<User[]> {
    return this.http.get<User[]>('/api/user');
  }
  carregarJogos(): Observable<Game[]> {
    return this.http.get<Game[]>('/api/game');
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

