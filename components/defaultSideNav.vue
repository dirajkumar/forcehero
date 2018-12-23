<template>
  <div :style="cssProps">
    <v-navigation-drawer 
      :mini-variant="miniVariant"
      v-model="drawer"
      class="primaryColor"
      disable-resize-watcher
      absolute
      dark
      app
      temporary
    >
      <v-list dark>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="subheading mt-1">
            Home
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
      
      <v-divider light/>
      <v-list dark>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            Schema
          </v-list-tile-title>
        </v-list-tile>

        <v-list-group
          prepend-icon="list"
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Data</v-list-tile-title>
          </v-list-tile>
        
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>query_builder</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Query
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>edit</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Modify
            </v-list-tile-title>
          </v-list-tile>
        </v-list-group>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>album</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            Metadata
          </v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>web_asset</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>
            Rest Api
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      miniVariant: false,
      drawer: false,
      title: 'ForceHero'
    }
  },
  computed: {
    cssProps() {
      return {
        '--primary-color': this.$vuetify.theme.primary
        // '--primary-color-darker': this.applyColorContrast(
        //   this.$vuetify.theme.primary,
        //   -15
        // )
      }
    }
  },
  created() {
    // $on method will receive the updated count value from the sender component
    this.$nuxt.$on('DEFAULT_DRAWER_CLICK', data => {
      this.drawer = data
    })
  }
}
</script>

<style scoped>
.primaryColor {
  background-color: var(--primary-color);
}
</style>
