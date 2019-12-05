<template>
  <div>Access Token: {{ accountObject }}</div>
</template>

<script>
export default {
  middleware: 'isAuthenticated',
  // async fetch({ store }) {
  //   await store.dispatch('objects/getList')
  // },

  // async asyncData({ store, app }) {
  //   await store.dispatch('objects/getList')
  //   console.log('Fetch method app====', app)
  //   console.log('Fetch method this====', app.$sf)
  //   const meta = await app.$sf.sobject('Account').describe()
  //   console.log('meta===', meta)
  //   store.commit('SET_LIST', meta)
  // },

  computed: {
    accountObject() {
      return this.$store.getters['schema/getObjectList']
    }
  },

  async created() {
    await this.$store.dispatch('schema/retrieveObjectList')
    console.log('meta===', this.$store.getters['schema/getObjectList'])
    // this.$store.commit('SET_LIST', meta)
  }
}
</script>
