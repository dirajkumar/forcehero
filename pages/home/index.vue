<template>
  <div>
    Access Token: {{ accountObject }}
  </div>
</template>

<script>
export default {
  // middleware: 'isAuthenticated',
  // async fetch({ store, params }) {
  //   await store.dispatch('objects/getList')
  // },

  computed: {
    accountObject() {
      return this.$store.state.objects
    }
  },
  created() {
    this.$store.dispatch('objects/getList')
    // // console.log('Fetch method app====', app)
    // console.log('Fetch method this====', app.$sf)
    // const meta = await this.$sf.sobject('Account').describe()
    // console.log('meta===', meta)
    // this.$store.commit('SET_LIST', meta)
  }
  // async asyncData({ store, params, app }) {
  //   // await store.dispatch('objects/getList')
  //   // console.log('Fetch method app====', app)
  //   console.log('Fetch method this====', app.$sf)
  //   const meta = await app.$sf.sobject('Account').describe()
  //   console.log('meta===', meta)
  //   store.commit('SET_LIST', meta)
  // }
}
</script>
