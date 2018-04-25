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

  @media (min-width: $screen-lg) {
    grid-template-columns: auto 56rem auto;
    grid-template-rows: 9.8rem;
  }

  &__logo {
    grid-area: 'logo';

    @media (min-width: $screen-lg) {
      justify-self: end;
      line-height: 7.2rem;
    }
  }

  &__nav-pages {
    grid-area: 'navigation';

    @media (min-width: $screen-lg) {
      align-self: center;
    }
  }

  &__cart {
    grid-area: 'cart';

    @media (min-width: $screen-lg) {
      justify-self: end;
    }
  }
}
</style>
