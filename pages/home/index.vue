<template>
  <div>
    Access Token: {{ loggedInUser }}
  </div>
</template>

<script>
export default {
  middleware: 'isAuthenticated',
  asyncData({ query, store }) {
    console.log('')
  },
  computed: {
    loggedInUser() {
      return this.$store.state.user
    }
  }
}
</script>
