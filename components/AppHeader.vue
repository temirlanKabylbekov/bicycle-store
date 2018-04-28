<template>
  <header class="header">
    <AppLogo class="header__logo" />
    <BarForMainNavigation class="header__nav-pages" />
    <Cart class="header__cart" />
  </header>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import BarForMainNavigation from '~/components/AppMenu/BarForMainNavigation';
import Cart from '~/components/AppMenu/Cart.vue';

export default {
	components: {
    AppLogo,
    BarForMainNavigation,
    Cart,
	},
}
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  padding-top: 1.5rem;

  grid-template-columns: auto 4rem 6rem;
  grid-template-rows: 2.8rem 6.3rem;

  @media (min-width: $screen-lg) {
    padding: 0;
    grid-template-columns: auto 56rem auto;
    grid-template-rows: 9.8rem;
  }

  &__logo {
    justify-self: center;
    grid-area: 2 / 1 / 3 / 4;

    @media (min-width: $screen-lg) {
      justify-self: space-between;
      grid-area: 1 / 1 / 2 / 2;
      line-height: 7.2rem;
    }
  }

  &__nav-pages {
    grid-area: 1 / 3 / 2 / 4;

    @media (min-width: $screen-lg) {
      align-self: center;
      grid-area: 1 / 2 / 2 / 3;
    }
  }

  &__cart {
    grid-area: 1 / 2 / 2 / 3;
    align-self: center;

    @media (min-width: $screen-lg) {
      justify-self: end;
      grid-area: 1 / 3 / 2 / 4;
    }
  }
}
</style>
