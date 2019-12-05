<template>
  <div class="d-flex fh-container">
    <section class="fh-login-container d-flex flex-column justify-end">
      <welcome-login />
      <welcome-footer />
    </section>
    <section class="fh-main hidden-md-and-down">
      <welcome-main />
    </section>
  </div>
</template>

<script>
import welcomeLogin from '@/components/welcome/login.vue'
import welcomeFooter from '@/components/welcome/footer.vue'
import welcomeMain from '@/components/welcome/main.vue'

export default {
  auth: false,

  layout: 'landing',

  components: {
    welcomeLogin,
    welcomeFooter,
    welcomeMain
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
  background-color: var(--v-accent-lighten2);
}

.fh-main {
  flex: 2.5;
  height: 100%;
  /* background-color: var(--v-primary-base); */
}
</style>
