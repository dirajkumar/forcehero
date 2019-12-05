<template>
  <div class="fh-main-logo">
    <span class="fh-main-force ml-2">{{ title1 }}</span>
    <span class="fh-main-hero mr-2">{{ title2 }}</span>
    <div class="fh-main-line-container d-flex align-center">
      <v-divider class="fh-main-line" />
      <span class="fh-main-dot"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title1: 'force',
      title2: 'hero'
    }
  },

  mounted() {
    this.$anime
      .timeline({
        targets: '.fh-logo',
        duration: 500,
        easing: 'easeOutExpo'
      })
      .add({
        targets: '.fh-logo',
        opacity: 0
      })
      .add({
        targets: '.fh-logo',
        opacity: 0.5
      })
      .add({
        targets: '.fh-logo',
        opacity: 1
      })
  }
}
</script>

<style>
.fh-main-force {
  font-size: 2rem;
  font-family: Panton-Regular;
  color: var(--v-primary-base);
}

.fh-main-hero {
  font-size: 2rem;
  font-family: Panton-Bold;
  font-weight: bolder;
  color: var(--v-secondary-base);
}

.fh-main-line-container {
  margin-top: -8px;
}

.fh-main-line {
  background-color: var(--v-primary-base);
}

.fh-main-dot {
  height: 8px;
  width: 8px;
  background-color: var(--v-primary-base);
  border-radius: 50%;
}
</style>
