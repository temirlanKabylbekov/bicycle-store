<template>
  <section class="shop-address">
		<header class="shop-address__header">
			<figure class="shop-address-header">
				<Icon name="map-marker-alt" class="shop-address-header__icon" />
				<figcaption class="shop-address-header__title">НАШ АДРЕС</figcaption>
			</figure>
		</header>
		<address class="shop-address__address">
			<p class="shop-address__address-item">Ул. Арбат, 1а, Москва,</p>
			<p class="shop-address__address-item">119019, Россия</p>
			<p class="shop-address__address-item">info@mysite.ru  |   +7 (495) 000-00-00</p>
		</address>
	</section>
</template>

<script>
import 'vue-awesome/icons/map-marker-alt';

export default {
  
}
</script>

<style lang="scss" scoped>
.shop-address {
	width: 34.2rem;

	& .shop-address-header {
		display: flex;
		flex-direction: column;
		align-items: center;

		&__title {
			font-size: 2.5rem;
			text-transform: uppercase;
		}

		&__icon {
			width: 6rem;
			height: 6rem;
			fill: $hacky;
			margin-bottom: 4rem;
		}
	}

	&__address {
		font-size: 1.5rem;
		line-height: 3rem;
		font-style: normal;
		text-align: center;
	}

	&__address-item {
		margin: 0;
	}
}

</style>
