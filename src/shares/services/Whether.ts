import { LoginType, WeatherType } from '../models/index'
import fetchAPI from '../../utils/handleAPI'
import { METHODS } from '../../utils/constants'
export const login = (body: LoginType) =>
  fetchAPI(`auth/login`, { method: METHODS.POST, body, auth: false })

export const getWeather = (lat: number, lon: number): Promise<WeatherType> => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=49f8541c5e9d0758175574596d1f532e`
  ).then((response) => response.json())
}
