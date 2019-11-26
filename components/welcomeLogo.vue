<template>
  <div class="fh-logo">
    <span class="fh-force mr-1">{{ title1 }}</span>
    <span class="fh-hero mr-2">{{ title2 }}</span>
    <div class="fh-line-container d-flex align-center">
      <v-divider class="fh-line" />
      <span class="fh-dot"></span>
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
.fh-force {
  font-size: 2rem;
  font-family: Panton-Regular;
  color: var(--v-primary-base);
}

.fh-hero {
  font-size: 2rem;
  font-family: Panton-Bold;
  font-weight: bolder;
  color: var(--v-secondary-base);
}

.fh-line-container {
  margin-top: -8px;
}

.fh-line {
  background-color: var(--v-primary-base);
}

.fh-dot {
  height: 8px;
  width: 8px;
  background-color: var(--v-primary-base);
  border-radius: 50%;
}
</style>
