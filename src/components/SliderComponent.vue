<template>
  <Splide :options="{ arrows: false,
                        pagination: false,
                        autoWidth: true,
                        padding: { top: 10, bottom: 20 },
                        direction: 'ltr',
                        autoplay: false, }"
      class="" aria-label="My Favorite Images">
    <slot />
  </Splide>
</template>

<script>
import { Splide } from '@splidejs/vue-splide';

export default {
  name: 'SliderComponent',
  components: {
    Splide,
  },
};

</script>

<style lang="scss" scoped>

</style>
