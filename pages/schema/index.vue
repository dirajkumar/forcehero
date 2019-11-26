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
      <v-icon color="white">
        mdi-reload
      </v-icon>
    </v-btn>
    <!-- <default-schema-header /> -->
    <v-layout column>
      <v-flex xs12 md-6>
        <v-list two-line>
          <v-subheader :key="index">
            Standard Objects
          </v-subheader>
          <template v-for="(item, index) in filteredList">
            <v-list-tile :key="item.label" avatar>
              <v-list-tile-content>
                <!-- <v-list-tile-title v-html="item.label" />
                <v-list-tile-sub-title v-html="item.name" /> -->
              </v-list-tile-content>
            </v-list-tile>
            <v-divider :key="index" :inset="item.inset" />
          </template>
        </v-list>
      </v-flex>
    </v-layout>
    <!-- <v-layout column>
      <v-container fluid grid-list-lg justify-center align-center>
        <v-flex xs12 md-6>
          Login to your salesforce org
        </v-flex>
        <v-icon class="emptyStateLarge">mdi-flower-outline</v-icon>
      </v-container>
    </v-layout> -->
  </v-card>
</template>

<script>
// import defaultSchemaHeader from '@/components/defaultSchemaHeader.vue'
import _ from 'lodash'

export default {
  // components: {
  //   defaultSchemaHeader
  // },
  middleware: 'isAuthenticated',
  data() {
    return {
      objectSearchTerm: ''
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
