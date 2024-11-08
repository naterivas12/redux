import { createReducer, on } from '@ngrx/store';
import { crear, editar, toggle } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial:Todo[] = [
  new Todo('Salvemos al mundo'),
  new Todo('vencer a tanos'),
  new Todo('Comprar traje airomen'),
  new Todo('Salvemos a tanos'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, {texto}) => [...state,new Todo(texto)]),
  on(toggle, (state, {id}) => {
    return state.map(todo =>{
      if(todo.id===id){
        return{
          ...todo,
          completado:!todo.completado 
  
        }
      }else{
        return todo;
      }
    })
  }),

  on(editar, (state, {id,texto}) => {
    return state.map(todo =>{
      if(todo.id===id){
        return{
          ...todo,
          texto:texto 
  
        }
      }else{
        return todo;
      }
    })
  }),
);

export function todoReducer(state:any,action:any){
  return _todoReducer(state,action)
}

