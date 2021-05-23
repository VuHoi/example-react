import { createReducer } from 'typesafe-actions'
import { ActionsType, actions } from '..'

export interface MapState {
  readonly ready: boolean
}

const initialState = {
  ready: false,
}

export const mapReducer = createReducer<MapState, ActionsType>(initialState).handleAction(
  actions.mapReadyAction as any,
  (state) => ({ ...state, ready: true })
)
