<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      class="primaryColor"
      disable-resize-watcher
      absolute
      dark
      app
      temporary
    >
      <!-- <v-list dark>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>mdi-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="subheading mt-1">
            Home
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
      
      <v-divider light/> -->

      <v-list dark>
        <template v-for="item in navigationItems">
          <v-list-tile v-if="!item.hasChildren" :key="item.to" :to="item.to">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              {{ item.label }}
            </v-list-tile-title>
          </v-list-tile>

          <v-list-group
            v-if="item.hasChildren"
            :key="item.to"
            prepend-icon="list"
            value="true"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>{{ item.label }}</v-list-tile-title>
            </v-list-tile>

            <v-list-tile
              v-for="child in item.children"
              :key="child.to"
              :to="child.to"
            >
              <v-list-tile-action>
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>
                {{ child.label }}
              </v-list-tile-title>
            </v-list-tile>
          </v-list-group>
        </template>
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
    navigationItems() {
      return this.$store.getters.navigation
    }
  },
  created() {
    this.$nuxt.$on('DEFAULT_DRAWER_CLICK', data => {
      this.drawer = data
    })
  }
}
</script>

<style scoped>
.primaryColor {
  background-color: var(--v-primary-base);
}
</style>
