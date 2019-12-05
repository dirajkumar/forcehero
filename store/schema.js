export const state = () => ({
  objectList: []
})

export const mutations = {
  SET_OBJECT_LIST: (state, objectList) => {
    state.objectList = objectList
  }
}

export const actions = {
  async retrieveObjectList({ commit }) {
    try {
      // const meta = await this.$sf.sobject('Account').describe()
      // const meta = await this.$sf.metadata.describe()
      const meta = await this.$axios.$get('/api/schema/objects')
      console.log('meta===', meta)
      commit('SET_OBJECT_LIST', meta.sobjects)
    } catch (err) {
      this.$router.replace('/')
    }
  }
}

export const getters = {
  getObjectList: state => state.objectList,
  getFilteredList: state => searchTerm => {
    if (!searchTerm) return state.objectList

    const newList = state.objectList.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return newList
  }
}
