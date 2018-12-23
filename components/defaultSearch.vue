<template>
  <v-text-field
    :label="label"
    class="mt-2 mr-3"
    prepend-inner-icon="search"
    height="20"
    browser-autocomplete="off"
    flat
    round
    solo-inverted
  />
</template>

<script>
export default {
  data() {
    return {
      label: 'Search',
      value: ''
    }
  }
}
</script>
