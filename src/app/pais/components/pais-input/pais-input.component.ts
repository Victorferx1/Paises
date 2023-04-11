import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe({
      next: (valor) => {
        this.onDebounce.emit(valor);
      }
    });
  }

  buscar() {
    this.onEnter.emit( this.termino );
  }

  teclaPresionada() {
    // si se envía un event en la función se usaría esto tambien.
    //const valor = event.target.value;
    this.debouncer.next( this.termino );
  }
}
