<template>
  <nuxt-link 
    :style="cssProps"
    class="logo" 
    to="/">
    <span class="forceText">{{ title1 }}</span>
    <span class="heroText">{{ title2 }}</span>
  </nuxt-link>
</template>

<script>
export default {
  data() {
    return {
      title1: 'force',
      title2: 'hero'
    }
  },
  computed: {
    cssProps() {
      return {
        '--secondary-color': this.$vuetify.theme.secondary
      }
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
  color: white;
}
.heroText {
  font-family: Panton-Bold;
  font-weight: bolder;
  color: var(--secondary-color);
  margin-left: -6px;
}
</style>
