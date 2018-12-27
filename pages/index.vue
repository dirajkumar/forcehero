<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-center">
        Home
      </div>
      <v-card>
        <v-card-title class="headline">Login to your salesforce org</v-card-title>
        <v-card-text>
          <p class="body-2">Login</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="primary"
            nuxt
            @click="onProduction">Production</v-btn>
          <v-btn
            nuxt
            outline
            @click="onSandbox">Sandbox</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { setSecret } from '~/utils/auth'

export default {
  data() {
    return {
      title: 'forcehero'
    }
  },
  methods: {
    async onProduction() {
      const response = await this.$axios.get('/auth/loginInfo')
      const secret = JSON.parse(window.atob(response.data.secret))
      setSecret(secret)
      console.log('url==', response.data.loginUrl)
      window.location.href = response.data.loginUrl
    },
    async onSandbox() {
      const response = await this.$axios.get('/auth/loginInfo', {
        params: {
          orgType: 'SANDBOX'
        }
      })
      const secret = JSON.parse(window.atob(response.data.secret))
      setSecret(secret)
      console.log('url==', response.data.loginUrl)
      window.location.href = response.data.loginUrl
    }
  }
}
</script>
