<template>
  <v-app>
    <welcome-header />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <default-footer />
  </v-app>
</template>

<script>
import defaultFooter from '@/components/defaultFooter.vue'
import welcomeHeader from '@/components/welcomeHeader.vue'

export default {
  components: {
    defaultFooter,
    welcomeHeader
  },
  data() {
    return {
      clipped: false
    }
  }
}
</script>
