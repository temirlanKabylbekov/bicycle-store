<template>
	<ul class="product-list list">
		<li class="product-list__item" v-for="product in products" :key="product.id">
			<ProductCard :product="product" />
		</li>
	</ul>
</template>

<script>
import ProductCard from '~/components/Products/ProductCard';

export default {
	components: {
		ProductCard,
	},
	computed: {
		products() {
			return this.$store.state.catalog.product_list;
		}
	},
}
</script>

<style lang="scss" scoped>
.product-list {
	padding: 0;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	@media (max-width: $screen-sm) {
		justify-content: center;
	}

	&__item {
		padding: 1.6rem;
	}
}
</style>
