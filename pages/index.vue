<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
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
            @click="onProductionClick">Production</v-btn>
          <v-btn
            nuxt
            outline
            @click="onSandboxClick">Sandbox</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { setSecret } from '~/utils/auth'

export default {
  layout: 'welcome',
  data() {
    return {
      title: 'forcehero'
    }
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
