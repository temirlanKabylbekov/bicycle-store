<template>
  <nav class="page-navigation">
    <TheBurger class="page-navigation__burger" @burgerState="burgerState" />
    <ul class="page-navigation__links list" v-if="menuIsVisible">
      <li v-for="page in pages" :key="page.name" class="page-navigation__item">
        <nuxt-link :to="page.url" class="page-navigation__link link">{{ page.name }}</nuxt-link>
      </li>
    </ul>  
  </nav>
</template>

<script>
import TheBurger from '~/components/AppMenu/TheBurger';
import pages from '~/data/navigationBarPages.json';

export default {
  components: {
    TheBurger,
  },
  data() {
    return {
      menuIsVisible: false,
      pages,
    };
  },
  methods: {
    burgerState(isOpen) {
      this.menuIsVisible = isOpen;
    }
  },
}
</script>

<style lang="scss" scoped>
.page-navigation {
  position: relative;

  &__links {
    position: absolute;
    top: 3rem;
    right: 3rem;
    opacity: 0.95;
    background: $white;

    padding: 0;
    margin: 0;
    width: 27.2rem;
  }

  &__item {
    text-transform: uppercase;
    height: 4.8rem;
    border: 0.1rem solid $blue--dark;
    border-bottom: none;
    text-align: center;
    line-height: 4.8rem;
  }
}

// TODO: background color for active link
// .nuxt-link-exact-active) {
//   background: $blue--dark;
// }
</style>
