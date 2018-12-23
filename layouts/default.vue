<template>
  <v-app :style="cssProps">
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      class="primaryColor"
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

    <v-toolbar
      :color="this.$vuetify.theme.primary"
      :clipped-left="clipped"
      fixed
      dark
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title>
        <nuxt-link 
          class="logo" 
          to="/">
          <span class="forceText">force</span>
          <span class="heroText">hero</span>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-text-field
        label="Search"
        class="mt-2 mr-3"
        prepend-inner-icon="search"
        height="20"
        browser-autocomplete="off"
        flat
        round
        solo-inverted
      />
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
    
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    
    <the-footer />
  </v-app>
</template>

<script>
import theFooter from '@/components/theFooter.vue'

export default {
  components: {
    theFooter
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        { icon: 'apps', title: 'Home', to: '/home' },
        { icon: 'bubble_chart', title: 'Logout', to: '/logout' }
      ],
      miniVariant: false,
      title: 'ForceHero'
    }
  },
  computed: {
    cssProps() {
      return {
        '--primary-color': this.$vuetify.theme.primary,
        '--secondary-color': this.$vuetify.theme.secondary,
        '--accent-color': this.$vuetify.theme.accent,
        '--primary-color-darker': this.applyColorContrast(
          this.$vuetify.theme.primary,
          -15
        )
      }
    }
  }
}
</script>

<style scoped>
.primaryColor {
  /* background-color: var(--primary-color-darker); */
  background-color: var(--primary-color);
}
.logo {
  font-size: 2rem;
  text-decoration: none;
}
.forceText {
  font-family: Panton-Regular;
  color: white;
}
.heroText {
  font-family: Panton-Bold;
  font-weight: bolder;
  color: var(--secondary-color);
  /* color: var(--accent-color); */
  margin-left: -6px;
}
</style>
