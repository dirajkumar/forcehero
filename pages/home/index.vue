<template>
  <div>
    Access Token: {{ $route.query.token }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: ''
    }
  },
  validate(data) {
    console.log('data==', data.query)
    this.token = data.query.token
  }
}
</script>
