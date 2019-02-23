import { decrypt } from '@/utils/crypt'
import { isAuth, apiVersion, navigation } from '@/utils/defaultState'
import { getCode, removeCode } from '~/utils/auth'

export const state = () => ({
  isAuth,
  apiVersion,
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
  // nuxtServerInit({ commit }, { req, res, state, route, redirect, app }) {
  //   console.log('nuxtServerInit===')
  // },

  nuxtClientInit({ commit }, { redirect }) {
    console.log('nuxtClientInit===')

    const code = getCode()
    if (code) {
      commit('SET_AUTH', code)
    }

    if (state.isAuth && !this.$sf) redirect('/errors/session')
  },

  async login({ commit }, { orgType }) {
    const response = await this.app.$axios.get('/api/auth/loginInfo', {
      params: {
        orgType
      }
    })
    commit('SET_AUTH', null)
    const code = decrypt(response.data)
    if (!code) return null

    const data = JSON.parse(code)
    if (!data || !data.loginUrl) return null

    return data.loginUrl
  },

  async logout({ commit }) {
    console.log('$sf logout===', this.$sf)
    console.log('code logout===', getCode())
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
  isAuthenticated: state => state.isAuth,
  apiVersion: state => state.apiVersion,
  navigation: state => state.navigation
}
