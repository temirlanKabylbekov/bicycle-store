<template>
  <div class="container">
    <AppHeader/>
    <div class="container__content">
      <nuxt/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>


<style lang="scss" scoped>

</style>
