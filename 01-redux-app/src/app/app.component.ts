import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as actions from './contador/contador.actions'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  contador: number = 0;

  constructor(private store:Store<AppState>){
    
    this.store.select('contador')
    .subscribe(contador => this.contador = contador)

  }

  incrementar(){
    this.store.dispatch(actions.incrementar());
  }

  decrementar(){
    this.store.dispatch(actions.decrementar());

  }
}
