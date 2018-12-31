import jsforce from 'jsforce'
import cookie from 'cookie'
import { encrypt, decrypt } from '@/utils/crypt'
import {
  getCode,
  getCodeFromCookie,
  setCode,
  removeCode,
  setSecret,
  verifySecret
} from '~/utils/auth'

export const state = () => ({
  isAuth: false,
  code: null,
  baseUrl: null,
  token: null,
  user: null
})

export const mutations = {
  SET_AUTH: (state, code) => {
    console.log('SET_AUTH', code)
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
  },
  SET_CODE: (state, code) => {
    console.log('SET_CODE', code)
    if (code) {
      state.code = code
      return
    }
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req, res, state, route, redirect, app }) {
    console.log('nuxtServerInit===')
  },

  nuxtClientInit({ commit }, { route, redirect }) {
    console.log('nuxtClientInit===')

    const code = getCode()
    if (code) {
      commit('SET_AUTH', code)
    }

    if (state.isAuth && !this.$sf) redirect('/errors/session')
  },

  async login({ state, commit }, { orgType }) {
    const response = await this.app.$axios.get('/api/auth/loginInfo', {
      params: {
        orgType
      }
    })
    debugger
    const code = decrypt(response.data)
    if (!code) return null

    const data = JSON.parse(code)
    if (!data || !data.loginUrl) return null

    return data.loginUrl
  },

  async logout({ state, commit, route }) {
    console.log('$sf logout===', this.$sf)
    console.log('code logout===', getCode())
    const code = getCode()
    if (!code) return

    const response = await this.app.$axios.get('/api/auth/logout', {
      params: {
        code: encrypt(JSON.stringify(code))
      }
    })
    // commit('SET_AUTH', null)
    // removeCode()
    await this.$sf.logout(err => {
      if (err) {
        console.error(err)
      }
      console.log('successfuully logged out')
      commit('SET_AUTH', null)
      removeCode()
    })
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.isAuth
  }
}
