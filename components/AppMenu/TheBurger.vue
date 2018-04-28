<template>
	<no-ssr>
		<button class="burger" :class="{'burger--open': open}" @click.prevent="click">
			<Icon name="bars" class="burger__icon" v-if="!open" />
			<Icon name="times" class="burger__icon" v-else />
		</button>
	</no-ssr>
</template>

<script>
import 'vue-awesome/icons/times';
import 'vue-awesome/icons/bars';

export default {
	data() {
		return {
			open: false,
		}
	},
	methods: {
		click(e) {
			this.open = !this.open;
			this.$emit('burgerState', this.open);
		},
	},
}
</script>

<style lang="scss" scoped>
.burger {
	background: transparent;
	fill: $white;
	cursor: pointer;
	border: none;

	&__icon {
		width: 2.38rem;
		height: 2.72rem;	
	}
}
</style>
