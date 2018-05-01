<template>
	<no-ssr>
		<div class="cart-icon">
			<Icon name="shopping-bag"></Icon>
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
@mixin styling($width, $height) {
  .cart-icon {
    position: relative;

    .fa-icon {
      fill: $hacky;
      width: $width;
      height: $height;
    }

    &__items-count {
      position: absolute;
      top: $height / 2;
      width: $width;
      z-index: $z-index-cart-icon__counter;
      color: $white;
      text-align: center;
      font-size: 0.9rem;
      font-weight: 600;
      line-height: 1.2rem;
    }
  }
}

// cart icon for mobile
@include styling($width: 3.5rem / 1.5, $height: 4rem / 1.5);

// cart icon for desktop
@media (min-width: $screen-lg) {
  @include styling($width: 3.5rem, $height: 4rem);
}
</style>
