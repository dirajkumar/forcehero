<template>
  <div class="d-flex fh-container">
    <section class="fh-login-container d-flex flex-column justify-end">
      <welcome-login />
      <welcome-footer />
    </section>

    <section class="fh-main hidden-md-and-down">
      <v-card-title class="headline" />
    </section>
  </div>
</template>

<script>
import welcomeLogin from '@/components/welcomeLogin.vue'
import welcomeFooter from '@/components/welcomeFooter.vue'

export default {
  layout: 'welcome',

  components: {
    welcomeLogin,
    welcomeFooter
  },

  data() {
    return {
      title: 'forcehero'
    }
  }
}
</script>

<style scoped>
.fh-container {
  height: 100%;
}

.fh-login-container {
  flex: 1;
}

.fh-main {
  flex: 2.5;
  background-color: var(--v-primary-base);
}
</style>
