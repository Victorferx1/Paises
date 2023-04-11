import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService ) {}
  buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais( this.termino )
    .subscribe({
      next: (paises) => {
        this.paises = paises;
        console.log(paises);
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
        console.log(err);
      },
      complete: () => {
        console.log('Se completo la llamada a paises');
      }
    });
  }
  sugerencias( termino: string ) {

  }
}
