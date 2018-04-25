<template>
	<div>
		<Media :query="{maxWidth: 992}">
			<MobileBarForMainNavigation />
		</Media>
		<Media :query="{minWidth: 993}">
			<DesktopBarForMainNavigation />
		</Media>
	</div>
</template>

<script>
import Media from 'vue-media';

import MobileBarForMainNavigation from '~/components/AppMenu/Mobile/BarForMainNavigation';
import DesktopBarForMainNavigation from '~/components/AppMenu/Desktop/BarForMainNavigation';

export default {
  components: {
		Media,

    MobileBarForMainNavigation,
    DesktopBarForMainNavigation,
  },
}
</script>

<style lang="scss" scoped>
</style>
