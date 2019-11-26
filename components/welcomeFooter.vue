<template>
  <footer class="footer pt-3">
    <div class="caption">
      &copy; {{ year }} forcehero.com &#8729; All rights reserved &#8729;
      Privacy
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      fixed: true,
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  display: flex;
  align-self: center;
  height: 50px;
}
</style>
