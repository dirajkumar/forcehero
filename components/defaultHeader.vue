<template>
  <v-toolbar
    :color="this.$vuetify.theme.primary"
    fixed
    dark
    app
  >
    <v-toolbar-side-icon @click="onDrawerClick" />
    <v-toolbar-title>
      <logo />
    </v-toolbar-title>
    <v-spacer />
    <default-search />
    <v-toolbar-items class="pr-10">
      <v-btn 
        flat 
        to="/schema">Schema
      </v-btn>
      <v-menu 
        :nudge-width="100" 
        offset-y>
        <v-btn
          slot="activator"
          flat
          dark>
          Data
        </v-btn>
        <v-list>
          <v-list-tile 
            to="/data/query">
            <v-list-tile-title>Query</v-list-tile-title>
          </v-list-tile>
          <v-list-tile 
            to="/data/modify">
            <v-list-tile-title>Modity</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn 
        flat 
        to="/metadata">Metadata</v-btn>
      <v-btn 
        flat 
        to="/rest">Rest Api</v-btn>
      <v-btn 
        icon
        to="/settings">
        <v-icon>settings</v-icon>
      </v-btn>
      <v-btn 
        icon
        to="/auth/logout">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import defaultSearch from '@/components/defaultSearch.vue'
import logo from '@/components/logo.vue'

export default {
  components: {
    defaultSearch,
    logo
  },
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onDrawerClick() {
      this.$nuxt.$emit('DEFAULT_DRAWER_CLICK', true)
    }
  }
}
</script>
