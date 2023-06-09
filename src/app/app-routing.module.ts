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
import { GerenciarJogosComponent } from './gerenciar-jogos/gerenciar-jogos.component';
import { CadastroJogoComponent } from './cadastro-jogo/cadastro-jogo.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { EditarJogoComponent } from './editar-jogo/editar-jogo.component';

const routes: Routes = [
  {path: "", component: GamesComponent},
  {path: "login", component: LoginComponent},
  {path: "listarJogos", component: ListarJogosComponent},
  {path: "alterarJogos", component: AlterarJogoComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "gerenciarUsuarios", component: GerenciarUsuariosComponent},
  {path: "cadastroUsuarios", component: CadastroUsuarioComponent},
  {path: "gerenciarJogos", component: GerenciarJogosComponent},
  {path: "cadastroJogos", component: CadastroJogoComponent},
  {path: "editarUsuarios", component: EditarUsuarioComponent},
  {path: "editarUsuarios/:id", component: EditarUsuarioComponent },
  {path: "editarJogos", component: EditarJogoComponent },
  {path: "editarJogos/:id", component: EditarJogoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
