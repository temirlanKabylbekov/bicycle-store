<template>
  <a class="cart" href="">
    <IconForCart />
  </a>
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
  display: inline-block;
}
</style>
