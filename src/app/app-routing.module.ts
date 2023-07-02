import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { GamesListComponent } from './games-list/games-list.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListarJogosComponent } from './listar-jogos/listar-jogos.component';
import { AlterarJogoComponent } from './alterar-jogo/alterar-jogo.component';
import { GerenciarUsuariosComponent } from './gerenciar-usuarios/gerenciar-usuarios.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

const routes: Routes = [
  {path: "", component: GamesComponent},
  {path: "login", component: LoginComponent},
  {path: "listarJogos", component: ListarJogosComponent},
  {path: "alterarJogos", component: AlterarJogoComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "gerenciarUsuarios", component: GerenciarUsuariosComponent},
  {path: "cadastroUsuarios", component: CadastroUsuarioComponent},
  {path: "editarUsuarios", component: EditarUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
