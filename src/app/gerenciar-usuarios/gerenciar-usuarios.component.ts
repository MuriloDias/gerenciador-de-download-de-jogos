import { Component } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { WebStorage } from '../DB/WebStorage';

@Component({
  selector: 'app-gerenciar-usuarios',
  templateUrl: './gerenciar-usuarios.component.html',
  styleUrls: ['./gerenciar-usuarios.component.css']
})
export class GerenciarUsuariosComponent {
  listaUsuariosAtivos: User[] = [];
  webStorage = new WebStorage();

  constructor(private route: ActivatedRoute, private router: Router){
    let usuariosConsultados = this.webStorage.consultarObjetoNoWebStorage('listaUsuariosAtivos');
    if(usuariosConsultados != null){
      this.listaUsuariosAtivos = usuariosConsultados;
    }
  }

}
