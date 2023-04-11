import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService 
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        // aqui se puede desestructurar param
        switchMap( ({ id }) => this.paisService.getPaisporAlpha( id ) ),
        tap( console.log )
      )
      .subscribe({
        next: ( pais ) => {
          this.pais = pais[0];
          console.log(pais[0]);
        }
      });

    // this.activatedRoute.params
    //   .subscribe({
    //     // aqui se está destructurando el objeto original y se obtiene el id
    //     // el nombre id está definido en la ruta que se creo.
    //     next: ({ id }) => {
    //       console.log(id);
    //       this.paisService.getPaisporAlpha( id )
    //         .subscribe({
    //           next: (pais) => {
    //             console.log(pais);
    //           }
    //         })
    //     }
    //   });
  }

}
