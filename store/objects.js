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
    if (!this.$sf) {
      return null
    }
    console.log('$sf===', this.$sf)
    try {
      // const meta = await this.$sf.sobject('Account').describe()
      // const meta = await this.$sf.metadata.describe()
      const meta = await this.$sf.metadata.list(
        [
          {
            type: 'CustomObject'
          }
        ],
        '43.0'
      )
      console.log('meta===', meta)
      commit('SET_LIST', meta)
    } catch (err) {
      console.error(err)
    }
  }
}
