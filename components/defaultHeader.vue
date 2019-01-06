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

      <v-toolbar-items class="pr-10 hidden-md-and-down">
        <template v-for="item in navigationItems" >
          <v-btn
            v-if="!item.hasChildren"
            :key="item.to"
            :to="item.to"
            flat
          >
            {{ item.label }}
          </v-btn>
          <v-menu
            v-if="item.hasChildren"
            :key="item.to"
            :nudge-width="100" 
            offset-y>
            <v-btn
              slot="activator"
              flat
              dark>
              {{ item.label }}
            </v-btn>
            <v-list>
              <v-list-tile
                v-for="child in item.children"
                :key="child.to"
                :to="child.to">
                <v-list-tile-title>{{ child.label }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </template>
        <default-user class="pt-2"/>
      </v-toolbar-items>

      <v-toolbar-items class="pr-10 hidden-lg-and-up">
        <default-medium-search />
        <default-user />
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import defaultSearch from '@/components/defaultSearch.vue'
import defaultMediumSearch from '@/components/defaultMediumSearch.vue'
import defaultUser from '@/components/defaultUser.vue'
import logo from '@/components/logo.vue'

export default {
  components: {
    defaultSearch,
    defaultMediumSearch,
    defaultUser,
    logo
  },
  data() {
    return {
      title: ''
    }
  },
  computed: {
    navigationItems() {
      return this.$store.getters.navigation
    }
  },
  methods: {
    onDrawerClick() {
      this.$nuxt.$emit('DEFAULT_DRAWER_CLICK', true)
    }
  }
}
</script>
