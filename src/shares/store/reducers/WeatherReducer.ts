import { createReducer } from 'typesafe-actions'

import { actions, ActionsType } from '../'
import { WeatherType } from '../../models'

export interface WeatherState {
  weather?: WeatherType
}

export const initialState = {}

export const weatherReducer = createReducer<WeatherState, ActionsType>(initialState)
  .handleAction(actions.weatherSetAction, (state: any, action: { payload: any }) => ({
    ...state,
    weather: action.payload,
  }))
  .handleAction(actions.weatherErrorAction, (state: any, action: { payload: any }) => {
    // tslint:disable-next-line: no-console
    console.error(action.payload)
    return state
  })
