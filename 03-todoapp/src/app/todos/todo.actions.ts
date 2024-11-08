import { createAction, props } from "@ngrx/store";

export const crear = createAction(
  '[Todo] Crear todo',
  props<{texto: string}>()
);

export const toggle = createAction(
  '[Todo] toggle todo',
  props<{id: number}>()
);

export const editar = createAction(
  '[Todo] editar todo',
  props<{id: number,texto:string}>()
);
