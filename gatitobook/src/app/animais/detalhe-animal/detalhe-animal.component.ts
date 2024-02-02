import { AnimaisService } from './../animais.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../animais';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css'],
})
export class DetalheAnimalComponent {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animaisService: AnimaisService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params['animalId'];
    this.animal$ = this.animaisService.buscaPorId(this.animalId);
  }

  curtir() {
    this.animaisService.curtir(this.animalId).subscribe({ next: (curtida) => {
      this.animal$ = this.animaisService.buscaPorId(this.animalId);
    }})
  }

  excluir() {
    this.animaisService.excluirAnimal(this.animalId).subscribe({
      next: () => {
        this.router.navigate(['/animais']);
      },
      error: (error) => console.log(error),
    });
  }
}
