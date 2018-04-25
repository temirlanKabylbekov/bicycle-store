<template>
	<no-ssr>
		<div class="cart-icon">
			<Icon class="cart-icon__icon" name="shopping-bag"></Icon>
			<div class="cart-icon__items-count">{{ cartItems }}</div>
		</div>
	</no-ssr>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return 12;
		},
  },
}
</script>

<style lang="scss" scoped>
.cart-icon {
  display: inline-block;
  position: relative;

  &__icon {
		fill: $hacky;
		width: 3.5rem;
		height: 4rem;
  }

  &__items-count {
    position: absolute;
    top: 2rem;
    width: 3.5rem;
    z-index: $z-index-cart-icon__counter;
    color: $white;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.2rem;
  }
}
</style>
