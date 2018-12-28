import jsforce from 'jsforce'
// import sf from '~/utils/sf'

export const state = () => ({
  list: []
})

export const mutations = {
  SET_LIST: (state, objects) => {
    state.list = objects
  }
}

export const actions = {
  async getList({ commit, req }) {
    // console.log('sf===', sf)
    // await sf._conn.sobject('Account').describe((err, meta) => {
    //   if (err) {
    //     return console.error(err)
    //   }
    //   console.log('Label : ' + meta.label)
    //   console.log('Num of Fields : ' + meta.fields.length)
    //   commit('SET_LIST', meta)
    // })
  }
}
