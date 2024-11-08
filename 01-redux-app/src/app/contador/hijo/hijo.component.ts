import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [],
})
export class HijoComponent {
  contador: number = 0;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  multiplicar() {
    // this.contador *=2
    // this.cambioContador.emit(this.contador)
    this.store.dispatch(actions.multiplicar({ numero: 2 }));
  }

  dividir() {
    // this.contador /=2
    // this.cambioContador.emit(this.contador)
    this.store.dispatch(actions.dividir({ numero: 2 }));
  }
}
