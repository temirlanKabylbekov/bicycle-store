<template>
	<div class="logo">
		<span class="logo__start">cлава</span><span class="logo__end">велосипеды</span>
	</div>
</template>

<style lang="scss" scoped>
.logo {
	display: inline-block;

	&__start {
		letter-spacing: 0.05rem;
		font-family: $font__family--logo;
		font-size: 5.5rem;
		color: $blue--dark;
		text-transform: capitalize;
		padding-right: 0.5rem;
	}

	&__end {
		letter-spacing: 0.2rem;
		font-size: 1.4rem;
		color: $hacky;
		text-transform: uppercase;
		vertical-align: 0.2rem;
	}
}
</style>
