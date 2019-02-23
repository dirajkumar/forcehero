<template>
  <a class="logo" @click.prevent="onLogoClick">
    <v-layout row>
      <div class="pt-1">
        <img
          src="../assets/images/logo.png"
          alt="force hero"
          height="25"
          width="40"
        />
      </div>
      <div class="pl-2 hidden-sm-and-down">
        <span class="forceText white--text">{{ title1 }}</span>
        <span class="heroText">{{ title2 }}</span>
      </div>
    </v-layout>
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
