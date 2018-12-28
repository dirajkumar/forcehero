<template>
  <a 
    class="logo"
    @click.prevent="onLogoClick">
    <span class="forceText white--text">{{ title1 }}</span>
    <span class="heroText">{{ title2 }}</span>
  </a>
</template>

<script>
export default {
  data() {
    return {
      title1: 'force',
      title2: 'hero'
    }
  },
  methods: {
    onLogoClick() {
      let url = '/'
      if (this.$store.state.isAuth) {
        url = '/home'
      }
      this.$router.replace(url)
    }
  }
}
</script>

<style>
.logo {
  font-size: 2rem;
  text-decoration: none;
}
.forceText {
  font-family: Panton-Regular;
}
.heroText {
  font-family: Panton-Bold;
  font-weight: bolder;
  color: var(--v-secondary-base);
  margin-left: -6px;
}
</style>
