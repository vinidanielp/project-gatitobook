import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe({
      next: () => {
        this.router.navigate(['animais']);
      },
      error: (erro) => {
        alert('Usuário ou senha inválido(s)!');
        console.log(erro);
      },
    });
  }
}
