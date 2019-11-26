<template>
  <div class="d-flex fh-container">
    <section class="fh-login-container d-flex flex-column justify-end">
      <welcome-login />
      <welcome-footer />
    </section>

    <section class="fh-main hidden-md-and-down">
      <github-corner />
    </section>
  </div>
</template>

<script>
import welcomeLogin from '@/components/welcome/login.vue'
import welcomeFooter from '@/components/welcome/footer.vue'
import githubCorner from '@/components/githubCorner.vue'

export default {
  layout: 'welcome',

  components: {
    welcomeLogin,
    welcomeFooter,
    githubCorner
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
  background-color: var(--v-primary-base);
}
</style>
