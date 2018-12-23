<template>
  <v-app :style="cssProps">
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      dark
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
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
        prepend-inner-icon="search"
        browser-autocomplete="off"
        flat
        round
        solo-inverted
      />
      <v-toolbar-items>
        <v-btn flat>Learn</v-btn>
        <v-btn flat>About</v-btn>
        <v-btn flat>Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      :color="this.$vuetify.theme.primary"
      app
      dark
    >
      <span>
        forcehero &copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
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
        '--accent-color': this.$vuetify.theme.accent
      }
    }
  }
}
</script>

<style scoped>
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
  margin-left: -6px;
}
</style>
