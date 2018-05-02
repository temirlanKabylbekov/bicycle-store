<template>
  <main class="contacts">
		<section class="contacts__info">
			<header class="contacts__header">Ждем в гости</header>
			<TheAddress class="contacts__address" />
			<WorkingHours class="contacts__working-hours" />
		</section>
	</main>
</template>

<script>
import WorkingHours from '~/components/Contacts/WorkingHours';
import TheAddress from '~/components/Contacts/TheAddress';

export default {
	components: {
		WorkingHours,
		TheAddress,
	},
}
</script>

<style lang="scss" scoped>
.contacts {

	&__info {
		display: grid;

		grid-template-columns: 1fr;
		grid-template-rows: 1.5rem auto auto auto;
		justify-items: center;
		grid-row-gap: 5rem;

		@media (min-width: $screen-md) {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 5rem auto auto;
			grid-row-gap: 5rem;
			grid-column-gap: 8rem;
		}
	}

	&__header {
		letter-spacing: .45rem;
		font-size: 2.5rem;
		text-transform: uppercase;
		color: $hacky;
		text-align: center;

		grid-row-start: 2;

		@media (min-width: $screen-md) {
			grid-area: 2 / 1 / 3 / 3;
			font-size: 4.5rem;
		}
	}

	&__address {
		grid-row-start: 3;

		@media (min-width: $screen-md) {
			grid-area: 3 / 1 / 4 / 2;
			justify-self: flex-end;
		}
	}

	&__working-hours {
		grid-row-start: 4;

		@media (min-width: $screen-md) {
			grid-area: 3 / 2 / 4 / 3;
			justify-self: flex-start;
		}
	}
}

</style>
