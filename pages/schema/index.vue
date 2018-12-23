<template>
  <div class="text-xs-center">
    Schema
  </div>
</template>

<script>
export default {
  methods: {
    onProduction() {
      console.log('Production')
      // this.$router.go({ fullPath: 'http://localhost:3030/auth/login', params: {  isSandbox: false } })
    },
    onSandbox() {
      // this.$router.go({ fullPath: 'http://localhost:3030/auth/login', params: { isSandbox: true} })
    }
  }
}
</script>
