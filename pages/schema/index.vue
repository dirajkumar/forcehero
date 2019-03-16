<template>
  <v-card flat elevation="0" height="80" class="pl-4 pr-2 no-border">
    <v-btn
      :color="this.$vuetify.theme.primary"
      fab
      dark
      small
      bottom
      right
      absolute
      @click="dialog = !dialog"
    >
      <v-icon color="white">mdi-reload</v-icon>
    </v-btn>
    <v-card-title>
      <v-layout align-start justify-center class="pb-4">
        <v-icon large left>
          mdi-database
        </v-icon>
        <v-layout align-start justify-start column class="pl-2">
          <div class="headline">
            <span>Schema</span>
          </div>
          <div class="caption">
            <span class="font-weight-regular font-italic">
              Last Refreshed:
            </span>
            <span class="font-weight-medium">10 mins ago</span>
          </div>
        </v-layout>
      </v-layout>
      <!-- <v-layout align-center justify-end>
        <v-flex xs12 sm3 d-flex offset-10 column>
          <v-select :items="items" label="Object" />
        </v-flex>
        <v-flex xs12 sm3 d-flex>
          <v-select :items="items" label="Field" />
        </v-flex>
      </v-layout> -->
    </v-card-title>
    <v-layout column>
      <v-container fluid grid-list-lg justify-center align-center>
        <v-flex xs12 md-6>
          Login to your salesforce org
        </v-flex>
        <v-icon class="emptyStateLarge">mdi-flower-outline</v-icon>
      </v-container>
    </v-layout>
  </v-card>
</template>

<script>
import _ from 'lodash'

export default {
  middleware: 'isAuthenticated',
  data() {
    return {
      objectSearchTerm: '',
      items: [
        {
          text: 'Objects',
          disabled: false,
          href: '/schema/objects'
        },
        {
          text: 'Account',
          disabled: false,
          href: '/schema/objects/account'
        },
        {
          text: 'Fields',
          disabled: false,
          href: '/schema/objects/account/fields'
        },
        {
          text: 'Name',
          disabled: false,
          href: '/schema/objects/account/fields/name'
        }
      ]
    }
  },
  computed: {
    filteredList() {
      return this.$store.getters['schema/getFilteredList'](
        this.objectSearchTerm
      )
    },
    navigationItems() {
      return this.$store.getters.navigation
    }
  },
  watch: {
    objectSearchTerm: function() {
      if (_.isEmpty(this.objectSearchTerm)) {
        return
      }
    }
  },
  created() {
    this.$store.dispatch('schema/retrieveObjectList')
  }
}
</script>

<style>
.emptyStateLarge {
  font-size: 80px;
}
.no-border {
  background-color: transparent !important;
  border-style: solid;
  border-width: thin 0 0 0;
  border-color: rgba(0, 0, 0, 0.12) !important;
  box-shadow: none;
  border-bottom-width: thin;
  border-top-style: unset;
}
</style>
