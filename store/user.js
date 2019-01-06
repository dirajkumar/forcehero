export const state = () => ({
  obj: {}
})

export const mutations = {
  SET_LOGGED_USER: (state, user) => {
    debugger
    state.obj = {
      id: user.user_id,
      name: user.display_name,
      email: user.email,
      username: user.username,
      language: user.language,
      locale: user.locale,
      timezone: user.timezone,
      thumbnail: user.photos.thumbnail,
      picture: user.photos.picture,
      orgId: user.organization_id
    }
  }
}

export const actions = {
  async getUserInfo({ commit, state, req }) {
    if (!this.$sf) {
      return null
    }
    try {
      debugger
      const user = await this.$sf.identity()
      console.log('user===', user)

      commit('SET_LOGGED_USER', user)
    } catch (err) {
      console.error(err)
    }
  }
}

export const getters = {
  getUser(state) {
    return state.obj
  }
}
