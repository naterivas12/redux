import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [],
})
export class NietoComponent {
  contador: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  reset() {
    // this.contador = 0;
    // this.contadorCambio.emit(0);
    this.store.dispatch(actions.reset());
  }
}
