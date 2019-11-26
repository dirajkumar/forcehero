<template>
  <div
    class="fh-login-container d-flex flex-column align-center justify-center"
  >
    <welcome-logo />
    <div class="fh-subtitle font-weight-light subtitle-1 pt-2">
      Empowering salesforce techies to become superheros
    </div>
    <div class="pa-10 mt-5 fh-login">
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
            @click="orgType = 'PRODUCTION'"
          >
            <div class="d-flex flex-column justify-center align-center pt-2">
              <img
                src="~assets/images/welcome/businessman.svg"
                height="80px"
                class="fh-image"
              />
              <v-card-text>
                <div class="subtitle-1 text-center">
                  Production
                </div>
                <div
                  class="fh-org-type caption font-italic font-weight-thin text-center"
                >
                  login.salesforce.com
                </div>
              </v-card-text>
            </div>
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
            @click="orgType = 'SANDBOX'"
          >
            <div class="d-flex flex-column justify-center align-center pt-2">
              <img
                src="~assets/images/welcome/developer.svg"
                height="80px"
                class="fh-image"
              />
              <v-card-text>
                <div class="subtitle-1 text-center">
                  Sandbox
                </div>
                <div
                  class="fh-org-type caption font-italic font-weight-thin text-center"
                >
                  test.salesforce.com
                </div>
              </v-card-text>
            </div>
          </v-card>
        </div>
        <!-- <div class="pt-6 d-flex align-center justify-center">
          <div class="body-2" text>
            Custom Domain
          </div>
        </div> -->
        <div class="pa-12">
          <v-btn x-large block color="primary" dark @click="onLoginClick">
            Let's do it
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import welcomeLogo from '@/components/welcome/logo.vue'

export default {
  components: {
    welcomeLogo
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
.fh-login-container {
  flex: 1;
}
.fh-login {
  width: 100%;
}
.fh-subtitle {
  font-family: Panton-Regular;
  color: var(--v-primary-base);
}
.fh-org-type {
  color: var(--v-primary-base);
}
</style>
