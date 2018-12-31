export const state = () => ({
  list: []
})

export const mutations = {
  SET_LIST: (state, objects) => {
    state.list = objects
  }
}

export const actions = {
  async getList({ commit, rootState, req }) {
    console.log('$sf===', this.$sf)
    try {
      const meta = await this.$sf.sobject('Account').describe()
      console.log('meta===', meta)
      commit('SET_LIST', meta)
    } catch (err) {
      console.error(err)
    }
  }
}
