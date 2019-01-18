<template>
  <div class="text-xs-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      nudge-bottom="10"
      transition="slide-y-transition"
      offset-y
    >
      <v-btn 
        slot="activator"
        icon>
        <v-icon 
          v-if="!showThumbnail"
          large>mdi-account-circle
        </v-icon>
        <v-list-tile
          v-if="showThumbnail"
          class="pa-0"
          avatar>
          <v-list-tile-avatar class="mb-3 ml-3">
            <img 
              :src="user.thumbnail" 
              :alt="user.name">
          </v-list-tile-avatar>
        </v-list-tile>
      </v-btn>

      <v-card>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img 
                :src="user.thumbnail"
                :alt="user.name">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ user.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ user.username }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-divider />

        <v-list >
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Email</v-list-tile-title>
              <v-list-tile-sub-title>{{ user.email }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Language - Locale</v-list-tile-title>
              <v-list-tile-sub-title>{{ user.language + ' - ' + user.locale }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>User Id</v-list-tile-title>
              <v-list-tile-sub-title>{{ user.id }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Organization Id</v-list-tile-title>
              <v-list-tile-sub-title>{{ user.orgId }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-card-actions>
          <v-spacer />

          <v-btn 
            flat
            @click="onSettings">
            Settings
          </v-btn>
          <v-btn 
            color="primary" 
            flat 
            @click="onLogout">
            Logout
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true
    }
  },
  computed: {
    user() {
      return this.$store.getters['user/getUser']
    },
    showThumbnail() {
      return this.$store.getters['user/getUser'].thumbnail ? true : false
    },
    apiVersion() {
      return this.$store.getters['apiVersion']
    }
  },
  created() {
    this.$store.dispatch('user/retrieveUser')
  },
  methods: {
    onSettings() {
      this.menu = false
      this.$router.push('/settings')
    },
    onLogout() {
      this.menu = false
      this.$store.dispatch('logout')
      this.$router.replace('/')
    }
  }
}
</script>
