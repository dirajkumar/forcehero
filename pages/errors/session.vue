<template>
  <div>
    <div class="display-1 mb-3">
      Oops! Your session has expired.
    </div>
    <div class="subheading mb-4">
      Please click here to login again. 
    </div>
    <div>
      <v-btn
        color="primary"
        nuxt
        to="/">Go to login page</v-btn>
    </div>
    
  </div>
</template>

<script>
export default {
  layout: 'error'
}
</script>
