<template>
  <header class="header">
    <AppLogo />
    <BarForMainNavigation />
    <Cart />
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

<style>

</style>
