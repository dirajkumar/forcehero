<template>
  <div>
    Access Token: {{ accountObject }}
  </div>
</template>

<script>
export default {
  // middleware: 'isAuthenticated',
  computed: {
    accountObject() {
      return this.$store.state.objects
    }
  },
  created() {
    this.$store.dispatch('objects/getList')
  }
}
</script>
