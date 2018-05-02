<template>
  <section class="working-hours">
		<header class="working-hours__header">
			<figure class="working-hours-header">
				<Icon name="clock" class="working-hours-header__icon" />
				<figcaption class="working-hours-header__title">Часы работы</figcaption>
			</figure>
		</header>
		<dl class="working-hours__schedule dl--inline">
			<dt class="working-hours__day-range">Понедельник — пятница:</dt><dd class="working-hours__time-range">10:00–20:00</dd>
			<dt class="working-hours__day-range">Суббота:</dt><dd class="working-hours__time-range">11:00–18:00</dd>
			<dt class="working-hours__day-range">Воскресенье:</dt><dd class="working-hours__time-range">12:00–16:00</dd>
		</dl>
  </section>
</template>

<script>
import 'vue-awesome/icons/clock';

export default {
  
}
</script>

<style lang="scss" scoped>
.working-hours {
	width: 34.2rem;

	& .working-hours-header {
		display: flex;
		flex-direction: column;
		align-items: center;

		&__title {
			font-size: 2.5rem;
			text-transform: uppercase;
		}

		&__icon {
			fill: $hacky;
			width: 6rem;
			height: 6rem;
			margin-bottom: 4rem;
		}
	}

	&__schedule {
		text-align: center;
		font-size: 1.5rem;
		line-height: 3rem;
	}
}
</style>
