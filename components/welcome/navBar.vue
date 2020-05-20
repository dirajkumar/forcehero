<template>
  <div class="fh-navbar-container">
    <v-toolbar dark elevation="0" color="rgba(0, 0, 0, 0.0)">
      <v-spacer />
      <v-toolbar-items>
        <v-btn text>
          Home
        </v-btn>
        <v-btn text>
          Features
        </v-btn>
        <v-btn text>
          Pricing
        </v-btn>
        <v-btn text>
          About
        </v-btn>
        <v-btn text>
          Contact
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title1: 'force',
      title2: 'hero'
    }
  }
}
</script>
