<template>
  <div>
    <v-toolbar
      :color="this.$vuetify.theme.primary"
      dark
      app
    >
      <v-toolbar-side-icon 
        class="hidden-lg-and-up" 
        @click="onDrawerClick" />
      <v-toolbar-title>
        <logo />
      </v-toolbar-title>
      <v-spacer />
      <default-search class="hidden-md-and-down"/>
      <v-toolbar-items class="pr-10">
        <v-btn 
          flat
          class="hidden-md-and-down"
          to="/schema">Schema
        </v-btn>
        <v-menu 
          :nudge-width="100" 
          class="hidden-md-and-down"
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
          class="hidden-md-and-down"
          to="/metadata">Metadata</v-btn>
        <v-btn 
          flat
          class="hidden-md-and-down"
          to="/rest">Rest Api</v-btn>
        <default-user class="pt-2"/>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import defaultSearch from '@/components/defaultSearch.vue'
import defaultUser from '@/components/defaultUser.vue'
import logo from '@/components/logo.vue'

export default {
  components: {
    defaultSearch,
    defaultUser,
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
