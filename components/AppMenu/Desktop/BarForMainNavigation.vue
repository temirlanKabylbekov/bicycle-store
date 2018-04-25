<template>
  <nav class="page-navigation">
    <ul class="page-navigation__items list">
      <li v-for="page in pages" :key="page.name">
        <nuxt-link :to="page.url" class="page-navigation__link link">{{ page.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import pages from '~/data/navigationBarPages.json';

export default {
  data() {
    return {
      pages,
    };
  },
}
</script>

<style lang="scss" scoped>
.page-navigation {
  display: inline-block;

  &__items {
    display: inline-flex;
    flex-direction: row;
    padding: 0;
    justify-content: space-around;
    width: 56rem;
  }

  &__link {
    text-transform: uppercase;
    font-size: 1.4rem;

    &:hover {
      color: $gold;
    }
  }
}
</style>
