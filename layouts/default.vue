<template>
  <v-app>
    <default-side-nav />
    <default-header />
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
import defaultHeader from '@/components/defaultHeader.vue'
import defaultSideNav from '@/components/defaultSideNav.vue'

export default {
  components: {
    defaultFooter,
    defaultHeader,
    defaultSideNav
  },
  data() {
    return {
      clipped: false
    }
  }
}
</script>
