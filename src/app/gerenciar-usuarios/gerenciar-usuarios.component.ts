import { Component } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { WebStorage } from '../DB/WebStorage';
import axios from 'axios';

@Component({
  selector: 'app-gerenciar-usuarios',
  templateUrl: './gerenciar-usuarios.component.html',
  styleUrls: ['./gerenciar-usuarios.component.css']
})
export class GerenciarUsuariosComponent {
  listaUsuariosAtivos: User[] = [];
  webStorage = new WebStorage();

  constructor(private route: ActivatedRoute, private router: Router){
    this.carregarUsuarios();
  }

  async carregarUsuarios() {
    try {
      const response = await axios.get('http://localhost:3000/user');
      this.listaUsuariosAtivos = response.data;
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  }

  editarUsuario(id: number): void {
    this.router.navigate(['/editarUsuarios', id]);
  }

}
