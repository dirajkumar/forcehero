<template>
  <v-navigation-drawer permanent class="transparent" fixed absolute>
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
  </v-navigation-drawer>
</template>

<script>
import _ from 'lodash'

export default {
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
