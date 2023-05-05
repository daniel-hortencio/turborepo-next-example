import { IAuthLoginResponse } from 'modules/Access/types'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

const cookies_names = {
  access_token: '@judit.io.access_token',
  refresh_token: '@judit.io.refresh_token',
  scope: '@judit.io.scope',
  token_type: '@judit.io.token_type'
}

export function useCookies(ctx?) {
  return {
    // Getters
    getAccessToken: () => {
      return parseCookies(ctx)[cookies_names.access_token]
    },
    getRefreshToken: () => {
      return parseCookies(ctx)[cookies_names.refresh_token]
    },
    getScope: () => {
      return parseCookies(ctx)[cookies_names.scope]
    },
    getTokenType: () => {
      return parseCookies(ctx)[cookies_names.token_type]
    },
    getUserAuth: () => ({
      access_token: useCookies(ctx).getAccessToken(),
      refresh_token: useCookies(ctx).getRefreshToken(),
      scope_token: useCookies(ctx).getScope(),
      token_type: useCookies(ctx).getTokenType()
    }),

    // Setters
    setAccessToken: (access_token: string, expires_in: number) => {
      setCookie(ctx, cookies_names.access_token, access_token, {
        maxAge: expires_in,
        path: '/'
      })
    },
    setRefreshToken: (refresh_token: string) => {
      setCookie(ctx, cookies_names.refresh_token, refresh_token, {
        path: '/'
      })
    },
    setScope: (scope: string) => {
      setCookie(ctx, cookies_names.scope, scope, {
        path: '/'
      })
    },
    setTokenType: (token_type: string) => {
      setCookie(ctx, cookies_names.token_type, token_type, {
        path: '/'
      })
    },
    saveUserAuth: (auth: IAuthLoginResponse) => {
      const { access_token, expires_in, refresh_token, scope, token_type } =
        auth

      useCookies(ctx).setAccessToken(access_token, expires_in)
      useCookies(ctx).setRefreshToken(refresh_token)
      useCookies(ctx).setScope(scope)
      useCookies(ctx).setTokenType(token_type)
    },

    // Setters
    destroyAuthCookies: () => {
      destroyCookie(ctx, cookies_names.access_token)
      destroyCookie(ctx, cookies_names.refresh_token)
      destroyCookie(ctx, cookies_names.scope)
      destroyCookie(ctx, cookies_names.token_type)
    }
  }
}
