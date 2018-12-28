<template>
  <v-toolbar
    :color="this.$vuetify.theme.primary"
    fixed
    dark
    app
  >
    <v-toolbar-title>
      <logo />
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn 
        icon
        to="/">
        <v-icon>power_settings_new</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import logo from '@/components/logo.vue'

export default {
  components: {
    logo
  },
  data() {
    return {
      title: ''
    }
  }
}
</script>
