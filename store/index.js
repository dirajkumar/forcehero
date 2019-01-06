import jsforce from 'jsforce'
import cookie from 'cookie'
import { encrypt, decrypt } from '@/utils/crypt'
import { navigation } from '@/utils/defaultState'
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
  apiVersion: '43.0',
  navigation
})

export const mutations = {
  SET_AUTH: (state, code) => {
    console.log('SET_AUTH', code)
    state.isAuth = code ? true : false
  },
  SET_API_VERSION: (state, apiVersion) => {
    console.log('SET_API_VERSION', apiVersion)
    state.apiVersion = apiVersion
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
    const code = decrypt(response.data)
    if (!code) return null

    const data = JSON.parse(code)
    if (!data || !data.loginUrl) return null

    return data.loginUrl
  },

  async logout({ state, commit, route }) {
    console.log('$sf logout===', this.$sf)
    console.log('code logout===', getCode())
    debugger
    const code = getCode()
    if (!code) return

    // const response = await this.app.$axios.get('/api/auth/logout', {
    //   params: {
    //     code: encrypt(JSON.stringify(code))
    //   }
    // })
    commit('SET_AUTH', null)
    removeCode()
    await this.$sf.logout(err => {
      if (err) {
        console.error(err)
      }
      console.log('successfuully logged out')
    })
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.isAuth
  },
  apiVersion(state) {
    return state.apiVersion
  },
  navigation(state) {
    return state.navigation
  }
}
