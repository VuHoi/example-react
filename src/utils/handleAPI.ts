import config from '../configs/config'

import { ajax } from 'rxjs/ajax'
import cookie from 'react-cookies'

interface Type {
  method?: string
  body?: any
  upload?: boolean
  token?: string
  auth?: boolean
}
interface Headers {
  Authorization?: string
  'Accept-Language'?: string
  'Content-Type'?: string
}
// tslint:disable-next-line: only-arrow-functions
const fetchApi = function (
  pathURL: string,
  { method = 'GET', body, auth = false, upload = false, token }: Type
) {
  const headers: Headers = {
    'Accept-Language': 'en',
  }
  const url = `${config.API_URL}/${pathURL}`
  let request: any = { url, method }
  const tokens = cookie.loadAll()

  if (auth) {
    headers.Authorization = `${tokens.token_type} ${token || tokens.access_token}`
  }
  if (method === 'GET') {
    request.url = `${url}${
      body
        ? Object.keys(body).reduce((r, rs) => (body[rs] ? `${r}&${rs}=${body[rs]}` : r), '?')
        : ''
    }`
  } else {
    if (!upload) headers['Content-Type'] = 'application/json'

    request = { ...request, body }
  }
  request = { ...request, headers }
  return ajax(request)
}

export default fetchApi
