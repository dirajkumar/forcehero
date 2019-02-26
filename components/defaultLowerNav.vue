<template>
  <v-breadcrumbs :items="items">
    <v-icon slot="divider">chevron_right</v-icon>
    <template slot="item" slot-scope="props">
      <!-- <a :href="props.item.href" class="title font-weight-light">
        {{ props.item.text.toUpperCase() }}
      </a> -->
      <span class="subheading font-weight-regular">Schema</span>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  middleware: 'isAuthenticated',
  data() {
    return {
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard'
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1'
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2'
        }
      ]
    }
  },
  computed: {
    navigationItems() {
      return this.$store.getters.currentNavigation
    }
  }
}
</script>
