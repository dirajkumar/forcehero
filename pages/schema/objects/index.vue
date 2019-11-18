<template>
  <!-- <v-navigation-drawer permanent class="transparent" fixed absolute>
    <v-toolbar flat>
      <v-list class="pt-4">
        <v-list-tile>
          <v-text-field
            v-model="objectSearchTerm"
            label="Search objects"
            prepend-inner-icon="search"
            browser-autocomplete="off"
            clearable
          />
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-3" dense>
      <v-list-tile v-for="item in filteredList" :key="item.name">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer> -->
  <!-- <v-breadcrumbs :items="items">
    <v-icon slot="divider">chevron_right</v-icon>
    <template slot="item" slot-scope="props">
      <a :href="props.item.href" class="title font-weight-light">
        {{ props.item.text.toUpperCase() }}
      </a>
      <span class="title font-weight-light">Schema</span>
    </template>
  </v-breadcrumbs> -->
  <v-card height="80" class="pl-4 pr-2">
    <v-btn
      :color="this.$vuetify.theme.primary"
      fab
      small
      bottom
      right
      absolute
      @click="dialog = !dialog"
    >
      <v-icon color="white">add</v-icon>
    </v-btn>
    <v-card-title>
      <v-layout align-start justify-center class="pb-4">
        <v-icon large left>
          mdi-database
        </v-icon>
        <v-layout align-start justify-start column class="pl-2">
          <div class="headline">
            <span>Schema</span>
            <v-icon class="pl-1">mdi-reload</v-icon>
          </div>
          <div class="grey--text">
            <v-breadcrumbs :items="items" class="pa-0">
              <v-icon slot="divider">forward</v-icon>
              <template slot="item" slot-scope="props">
                <a :href="props.item.href" class="subheading">
                  {{ props.item.text }}
                </a>
                <!-- <span>{{ props.item.text }}</span> -->
                <!-- <v-menu offset-y>
                  <v-list>
                    <v-list-tile>
                      <v-list-tile-title>Click Me</v-list-tile-title>
                      <v-list-tile-title>Click Me</v-list-tile-title>
                      <v-list-tile-title>Click Me</v-list-tile-title>
                      <v-list-tile-title>Click Me</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu> -->
              </template>
            </v-breadcrumbs>
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
