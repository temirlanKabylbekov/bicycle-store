<template>
  <figure class="cart">
    <IconForCart class="cart__icon" />
    <figcaption class="cart__caption">Корзина</figcaption>
  </figure>
</template>

<script>
import IconForCart from '~/components/AppMenu/IconForCart';

export default {
  components: {
    IconForCart,
  },
}
</script>

<style lang="scss" scoped>
.cart {
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;

  margin: 0;
  width: 14.1rem;
  height: 9.8rem;
  box-sizing: border-box;
  padding: 1.5rem;

  background-color: $black;

  &__icon {
    margin: 0 auto;
  }

  &__caption {
    text-transform: uppercase;
    text-align: center;
    color: $white;
    font-size: 1.4rem;
  }
}

</style>
