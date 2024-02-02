import { ActivatedRoute } from '@angular/router';
import { Animais } from './../animais';
import { Component } from '@angular/core';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent {
  animais!: Animais;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.animais = this.activatedRoute.snapshot.data['animais'];
    });
  }
}
