<template>
  <div class="text-xs-center">
    Loading...
  </div>
</template>

<script>
import { setCode } from '../../utils/auth'

export default {
  layout: 'welcome',
  data() {
    return {
      title: ''
    }
  },

  mounted() {
    console.log('token===', this.$route.query.token)
    let token = this.$route.query.token
    if (!token) {
      this.$router.push({
        path: '/'
      })
    }

    setCode(token)
    this.$store.commit('SET_AUTH', token)

    this.$router.push({
      path: '/home'
    })
  }
}
</script>
