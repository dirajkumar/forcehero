<template>
  <div
    class="fh-login-container d-flex flex-column align-center justify-center"
  >
    <welcome-logo />
    <div class="pa-8 fh-login">
      <div
        class="subtitle-2 
          font-weight-light 
          d-flex 
          align-center 
          justify-center
          pb-3"
      >
        <span>Choose Salesforce Organization Type</span>
      </div>
      <div class="d-flex flex-column">
        <div class="d-flex justify-space-around">
          <v-card
            height="160px"
            width="160px"
            class=""
            flat
            hover
            ripple
            nuxt
            outlined
            tile
            @click="onProductionClick"
          >
            <v-card-title class="subtitle-1">
              Production
            </v-card-title>
          </v-card>
          <v-card
            height="160px"
            width="160px"
            class=""
            flat
            hover
            ripple
            nuxt
            outlined
            tile
            @click="onSandboxClick"
          >
            <v-card-title class="subtitle-1">
              Sandbox
            </v-card-title>
          </v-card>
        </div>
        <div class="pt-6 d-flex align-center justify-center">
          <div class="body-2" text>
            Custom Domain
          </div>
        </div>
        <div class="pa-12">
          <v-btn x-large block color="primary" dark>
            Let's do it
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import welcomeLogo from '@/components/welcomeLogo.vue'

export default {
  components: {
    welcomeLogo
  },

  mounted() {
    this.$anime({
      targets: '.fh-login',
      translateX: 0
    })
  },

  methods: {
    async onProductionClick() {
      const url = await this.$store.dispatch('login', {
        orgType: 'PRODUCTION'
      })
      window.location.href = url
    },
    async onSandboxClick() {
      const url = await this.$store.dispatch('login', {
        orgType: 'SANDBOX'
      })
      window.location.href = url
    }
  }
}
</script>

<style scoped>
.fh-login-container {
  flex: 1;
}
.fh-login {
  width: 100%;
}
</style>
