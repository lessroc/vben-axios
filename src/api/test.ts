import { defHttp } from '@/utils/http/axios'

enum Api {
  joke = '/joke',
}

export function getJokeApi(params?: { type: 'json' }) {
  return defHttp.get<{ title: string; joke: string }>(
    { url: Api.joke, params },
    {
      apiUrl: 'https://api.vvhan.com/api',
      withToken: false,
      isTransformResponse: false,
    })
}
