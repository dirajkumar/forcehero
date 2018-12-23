<template>
  <div>
    Logout
  </div>
</template>

<script>
export default {
  created() {
    this.$auth.loginWith('social').then(() => this.$toast.success('Logged In!'))
  }
}
</script>
