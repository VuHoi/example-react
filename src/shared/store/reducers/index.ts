import { combineReducers } from 'redux'

import { weatherReducer, WeatherState } from './WeatherReducer'
import { mapReducer, MapState } from './MapReducer'

export type RootState = {
  weather: WeatherState
  map: MapState
}

const reducers = combineReducers({
  weather: weatherReducer as any,
  map: mapReducer as any,
})

export default reducers
