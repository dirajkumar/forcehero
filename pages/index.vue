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
export default {
  methods: {
    onProduction() {
      console.log('Production')
      // this.$router.go({ fullPath: 'http://localhost:3030/auth/login', params: {  isSandbox: false } })
    },
    onSandbox() {
      // this.$router.go({ fullPath: 'http://localhost:3030/auth/login', params: { isSandbox: true} })
    }
  }
}
</script>
