<template>
  <div class="d-flex flex-column fh-cont">
    <div class="fh-header">
      <div class="float-left">
        <main-logo />
      </div>
      <div class="float-right">
        Features
      </div>
      <github-corner />
    </div>
    <div class="fh-main-container">
      <div class="fh-main">
        <div class="display-3">
          Empowering salesforce techies to become superheros
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainLogo from '@/components/welcome/mainLogo.vue'
import githubCorner from '@/components/githubCorner.vue'

export default {
  components: {
    mainLogo,
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
.fh-cont {
  height: 100%;
}
.fh-header {
  flex: 1;
}
.fh-main-container {
  background: linear-gradient(
      rgba(232, 215, 241, 0.45),
      rgba(232, 215, 241, 0.45)
    ),
    url(~assets/images/welcome/landing-background.svg);
}
.fh-main {
  flex: 1;
}
</style>
