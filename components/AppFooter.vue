<template>
	<footer class="footer">
		<FormToSubscribeEmail class="footer__subscribe-form" />
		<p class="footer__copyright">© 2023 Магазин велосипедов «Слава»</p>
	</footer>
</template>

<script>
import FormToSubscribeEmail from '~/components/AppMenu/FormToSubscribeEmail';

export default {
	components: {
		FormToSubscribeEmail
	},
}
</script>

<style lang="scss" scoped>
.footer {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	background: $black;
	height: 30rem;

	&__copyright {
		text-align: center;
		color: $white;
		font-size: 1.4rem;
	}
}
</style>

