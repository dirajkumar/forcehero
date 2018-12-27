import axios from 'axios'
import { getCode, getCodeFromCookie, setCode, getSecret } from '~/utils/auth'

export const state = () => ({
  isAuth: false,
  baseUrl: null,
  token: null,
  user: null
})

export const mutations = {
  SET_AUTH: async (state, code) => {
    console.log('SET_AUTH', code)
    debugger
    if (code) {
      state.baseUrl = code.instanceUrl
      state.token = code.token
      state.user = code.user
      state.isAuth = true
      return
    }
    state.baseUrl = null
    state.token = null
    state.user = null
    state.isAuth = false
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    console.log('nuxtServerInit===')
    const data = getCodeFromCookie(req)

    console.log('code===', data)
    if (data) {
      commit('SET_AUTH', data)
    }
  },

  nuxtClientInit({ state, commit }, { query, route, redirect }) {
    console.log('nuxtClientInit===')
    const { code } = query
    if (route.path === '/validate/session' && code) {
      const data = JSON.parse(window.atob(code))
      if (data.secret !== getSecret()) redirect('/error')

      setCode(code)
      commit('SET_AUTH', data)
      redirect('/home')
    } else if (!state.isAuth) {
      const data = getCode()
      if (data) {
        commit('SET_AUTH', data)
      }
    }
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.isAuth
  }
}
