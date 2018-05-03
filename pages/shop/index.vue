<template>
	<main class="shop">
		<header class="shop__header">Наша коллекция</header>
		<ProductCardList class="shop__products" />
	</main>
</template>

<script>
import ProductCardList from '~/components/Products/ProductCardList';

export default {
	components: {
		ProductCardList,
	},
  beforeCreate() {
    this.$store.dispatch('catalog/FETCH_PRODUCTS');
  },
}
</script>

<style lang="scss" scoped>
.shop {
	&__header {
		letter-spacing: 0.45rem;
		font-size: 4.5rem;
		color: $hacky;
		text-align: center;
	}
}

</style>
