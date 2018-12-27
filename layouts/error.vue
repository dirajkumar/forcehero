<template>
  <v-app>
    <error-header />
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
import errorHeader from '@/components/errorHeader.vue'

export default {
  components: {
    defaultFooter,
    errorHeader
  },
  data() {
    return {
      clipped: false
    }
  }
}
</script>
