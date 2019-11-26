<template>
  <v-toolbar :color="this.$vuetify.theme.primary" fixed dark>
    <v-toolbar-title>
      <default-logo />
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn icon to="/">
        <v-icon>power_settings_new</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import defaultLogo from '@/components/defaultLogo.vue'

export default {
  components: {
    defaultLogo
  },
  data() {
    return {
      title: ''
    }
  }
}
</script>
