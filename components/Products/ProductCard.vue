<template>
  <article class="product-card">
		<nuxt-link :to="product.url" class="product-card__link link">
			<div class="product-card__image-holder">
				<span class="product-card__discount" v-if="product.discount">Скидка {{ product.discount }}%</span>
				<img  class="product-card__image" :src="product.img" :alt="product.name">
			</div>
			<footer class="product-card__description">
				<div class="product-card__name">{{ product.name }}</div>
				<div class="product-card__price">{{ product.price }}</div>
			</footer>
		</nuxt-link>
	</article>
</template>

<script>
export default {
	props: {
		product: { type: Object, required: true },
	},
}
</script>

<style lang="scss" scoped>
.product-card {

	&__image-holder {
		position: relative;
	}

	&__discount {
		position: absolute;
		background: $violet;
		font-size: 1.6rem;
		color: $white;
		text-transform: uppercase;
		padding: 0.5rem 1rem;
		top: 1rem;
	}

	&__name {
		padding-top: 1.5rem;
		font-size: 1.6rem;
	}

	&__price {
		font-size: 1.3rem;
		color: $grey;
	}
}

</style>
