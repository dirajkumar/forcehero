<template>
  <v-navigation-drawer 
    permanent 
    class="transparent"
    hide-overlay
    clipped
    absolute>
    <v-toolbar 
      flat>
      <v-list class="pt-4">
        <v-list-tile>
          <v-text-field 
            label="Search objects"
            prepend-inner-icon="search"
            browser-autocomplete="off"
            clearable
          />
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list 
      class="pt-3" 
      dense>
      <v-list-tile 
        v-for="item in items" 
        :key="item.title">
        <!-- <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action> -->

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  middleware: 'isAuthenticated',
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      right: null,
      objectSearchTerm: ''
    }
  }
}
</script>
