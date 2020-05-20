<template>
  <div class="d-flex flex-column fh-main-container">
    <div class="fh-header">
      <nav-bar />
      <github-corner />
    </div>
    <div class="fh-main-content">
      <div class="display-3">
        Empowering salesforce techies to become superheros
      </div>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/welcome/navBar.vue'
import githubCorner from '@/components/githubCorner.vue'

export default {
  components: {
    navBar,
    githubCorner
  },

  data() {
    return {
      orgType: ''
    }
  },

  mounted() {
    this.$anime({
      targets: '.fh-login',
      translateX: 0
    })
  },

  methods: {
    async onLoginClick() {
      const url = await this.$store.dispatch('login', {
        orgType: this.orgType
      })
      window.location.href = url
    }
  }
}
</script>

<style scoped>
.fh-main-container {
  height: 100%;
  background-color: var(--v-primary-base);
}
.fh-header {
  flex: 1;
}
/* .fh-main-container {
  background: linear-gradient(
      rgba(232, 215, 241, 0.45),
      rgba(232, 215, 241, 0.45)
    ),
    url(~assets/images/welcome/landing-background.svg);
} */
.fh-main-content {
  flex: 1;
}
</style>
