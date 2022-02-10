import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Actions, Effect, ofType } from "@ngrx/effects";

export class Lista {
    constructor(public titulo: string) {}
}

// tslint:disable-next-line:interface-name
export interface ListasState {
    items: Lista[];
    sugerida: Lista;
}

export function intializeListasState(){
    return {
        items: [],
        sugerida: null
    };
}

export enum ListasActionTypes {
    INIT_MY_DATA = "[Listas] Init My Data",
    NUEVA_LISTA = "[Listas] Nueva",
    SUGERIR_LISTA = "[Listas] Sugerir"
}

// tslint:disable-next-line:max-classes-per-file
export class InitMyDataAction implements Action {
    type = ListasActionTypes.INIT_MY_DATA;
    constructor(public titulares: Array<string>){}
}

// tslint:disable-next-line:max-classes-per-file
export class NuevaListaAction implements Action {
    type = ListasActionTypes.NUEVA_LISTA;
    constructor(public lista: Lista){}
}

// tslint:disable-next-line:max-classes-per-file
export class SugerirAction implements Action {
    type = ListasActionTypes.SUGERIR_LISTA;
    constructor(public lista: Lista){}
}

export type ListasViajesActions = NuevaListaAction | InitMyDataAction;

export function reducersListas(
    state: ListasState,
    action: ListasViajesActions
) : ListasState {
    switch(action.type){
        case ListasActionTypes.INIT_MY_DATA: {
            const titulares: Array<string> = (action as InitMyDataAction).titulares
            return {...state, items: titulares.map(t => new Lista(t))};
        }
        case ListasActionTypes.NUEVA_LISTA:{
            return {...state, items: [...state.items, (action as NuevaListaAction).lista]};
        }
        case ListasActionTypes.SUGERIR_LISTA: {
            return { ...state, sugerida: (action as SugerirAction).lista };
        }
    }
    return state;
}

@Injectable()
export class ListasEffects {
    @Effect()
    nuevoAgregado$: Observable<Action> = this.actions$.pipe(
        ofType(ListasActionTypes.NUEVA_LISTA),
        map((action: NuevaListaAction) => new SugerirAction(action.lista))
    );
    constructor(private actions$: Actions){}
}