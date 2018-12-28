import jsforce from 'jsforce'
import {
  getCode,
  getCodeFromCookie,
  setCode,
  removeCode,
  setSecret,
  verifySecret
} from '~/utils/auth'
// import sf from '~/utils/sf'

export const state = () => ({
  isAuth: false,
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
  }
}

export const actions = {
  // nuxtServerInit({ commit, state }, { req, route, redirect }) {
  //   console.log('nuxtServerInit===', state)
  //   const code = getCodeFromCookie(req)

  //   if (!code) return

  //   // if (state.isAuth) {
  //   //   sf.connection(code)
  //   // }

  //   commit('SET_AUTH', code)
  //   if (route.path === '/') {
  //     redirect('/home')
  //   }
  // },

  // nuxtClientInit({ state, commit }, { query, route, redirect }) {
  //   console.log('nuxtClientInit===')
  //   const { code } = query
  //   let data = null

  //   if (route.path === '/validate/session' && code) {
  //     if (!verifySecret(data.secret)) redirect('/errors/session')
  //     setCode(code)
  //     redirect('/home')
  //     commit('SET_AUTH', data)
  //   } else if (!state.isAuth) {
  //     data = getCode()
  //     if (data) {
  //       commit('SET_AUTH', data)
  //     }
  //   }
  //   // data = getCode()
  //   // if (state.isAuth && data && !sf._conn.token) {
  //   //   console.log('data===', data)
  //   //   sf.connection(data)
  //   // }
  // },

  nuxtServerInit({ commit }, { req }) {
    console.log('nuxtServerInit===')
    const data = getCodeFromCookie(req)

    if (data) {
      commit('SET_AUTH', data)
    }
  },

  nuxtClientInit({ state, commit }, { query, route, redirect }) {
    console.log('nuxtClientInit===')
    const { code } = query
    if (route.path === '/validate/session' && code) {
      const data = JSON.parse(window.atob(code))
      if (!verifySecret(data.secret)) redirect('/errors/session')

      setCode(code)
      commit('SET_AUTH', data)
      redirect('/home')
    } else if (!state.isAuth) {
      const data = getCode()
      if (data) {
        commit('SET_AUTH', data)
      }
    }
  },

  async login({ state, commit }, { orgType }) {
    const response = await this.app.$axios.get('/api/auth/loginInfo', {
      params: {
        orgType
      }
    })
    const secret = JSON.parse(window.atob(response.data.secret))
    setSecret(secret)
    return response.data.loginUrl
  },

  async logout({ state, commit, route }) {
    const { token, instanceUrl } = getCode()
    const conn = new jsforce.Connection({
      sessionId: token,
      serverUrl: instanceUrl
    })
    await conn.logout(err => {
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
