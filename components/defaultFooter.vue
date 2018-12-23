<template>
  <v-footer
    :fixed="fixed"
    :color="this.$vuetify.theme.primary"
    app
    dark
  >
    <span>
      forcehero &copy; 2019
    </span>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      fixed: true
    }
  }
}
</script>
