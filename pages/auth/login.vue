<template>
  <div>
    Login
  </div>
</template>

<script>
export default {
  created() {
    this.$axios.get('http://localhost:3030/auth/login')
  }
}
</script>
