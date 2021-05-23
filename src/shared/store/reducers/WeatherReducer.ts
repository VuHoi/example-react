import { createReducer } from 'typesafe-actions'

import { actions, ActionsType } from '..'
import Weather from '../../models/Weather'

export interface WeatherState {
  weather?: Weather
}

export const initialState = {}

export const weatherReducer = createReducer<WeatherState, ActionsType>(initialState)
  .handleAction(actions.weatherSetAction as any, (state, action) => ({
    ...state,
    weather: new Weather(action.payload),
  }))
  .handleAction(actions.weatherErrorAction as any, (state, action) => {
    console.error(action.payload)
    return state
  })
