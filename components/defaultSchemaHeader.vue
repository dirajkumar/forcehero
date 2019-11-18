<template>
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
          <span class="font-weight-medium">{{ lastRefereshed }}</span>
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
</template>

<script>
export default {
  data() {
    return {
      lastRefereshed: '10 mins ago'
    }
  }
}
</script>
