<template>
  <v-app>
    <!-- <default-side-nav />
    <default-header /> -->
    <v-content>
      <v-container fluid align-start class="pt-2 pb-2 pl-0 pr-0">
        <!-- <default-lower-nav /> -->
        <nuxt />
      </v-container>
    </v-content>
    <!-- <default-footer /> -->
  </v-app>
</template>

<script>
// import defaultFooter from '@/components/defaultFooter.vue'
// import defaultHeader from '@/components/defaultHeader.vue'
// import defaultSideNav from '@/components/defaultSideNav.vue'
// import defaultLowerNav from '@/components/defaultLowerNav.vue'

export default {
  // components: {
  //   defaultFooter,
  //   defaultHeader,
  //   defaultSideNav,
  //   defaultLowerNav
  // },
  data() {
    return {
      clipped: false
    }
  }
}
</script>
