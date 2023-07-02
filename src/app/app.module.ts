import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GamesListComponent } from './games-list/games-list.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListarJogosComponent } from './listar-jogos/listar-jogos.component';
import { AlterarJogoComponent } from './alterar-jogo/alterar-jogo.component';
import { GerenciarUsuariosComponent } from './gerenciar-usuarios/gerenciar-usuarios.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { AtivoDesativoPipe } from './pipe/ativo-desativo.pipe';
import { HttpClientModule } from '@angular/common/http';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    UsersComponent,
    HeaderComponent,
    FooterComponent,
    GamesListComponent,
    LoginComponent,
    DashboardComponent,
    ListarJogosComponent,
    AlterarJogoComponent,
    GerenciarUsuariosComponent,
    CadastroUsuarioComponent,
    AtivoDesativoPipe,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
