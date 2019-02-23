<template>
  <v-footer :color="this.$vuetify.theme.primary" app dark>
    <v-container bg fill-height grid-list-md text-xs-center>
      <v-layout row align-center mb-2>
        <v-flex align-self-center>
          Copyrights &copy; forcehero 2019
        </v-flex>
      </v-layout>
    </v-container>
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
