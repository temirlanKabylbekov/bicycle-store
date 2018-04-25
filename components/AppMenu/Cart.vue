<template>
  <div>
    <Media :query="{maxWidth: 992}">
			<MobileCart />
		</Media>
		<Media :query="{minWidth: 993}">
			<DesktopCart />
		</Media>
  </div>
</template>

<script>
import Media from 'vue-media';

import MobileCart from '~/components/AppMenu/Mobile/Cart';
import DesktopCart from '~/components/AppMenu/Desktop/Cart';

export default {
  components: {
    Media,

    MobileCart,
    DesktopCart,
  },
}
</script>
