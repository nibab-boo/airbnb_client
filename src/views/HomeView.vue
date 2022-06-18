<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <SearchBar />
  <div class="my-5 flex flex-wrap">
    <button class="bg-slate-50 px-4 py-2 mr-2 rounded-3xl border border-gray-400">Dates</button>
    <button class="bg-slate-50 px-4 py-2 mr-2 rounded-3xl border border-gray-400">Guest</button>
    <button class="bg-slate-50 px-4 py-2 mr-2 rounded-3xl border border-gray-400">Filter</button>
  </div>
  <h1 class="my-2">What can we help you find?</h1>
  <div class="my-3">
    <Splide :options="{ arrows: false,
                        pagination: false,
                        autoWidth: true,
                        padding: { top: 10, bottom: 20 },
                        direction: 'ltr',
                        autoplay: false, }"
      class="" aria-label="My Favorite Images">
      <!-- <div class="flex"> -->

      <SplideTrack class="splide__slide p-2 ">
        <div class="rounded-xl overflow-hidden shadow-md"
        style="min-width: 148px; height: 148px">
          <img width="148" height="100" src="https://media.istockphoto.com/photos/making-healthy-meal-picture-id1162184637?k=20&m=1162184637&s=612x612&w=0&h=NMY_uqGlL61zdGcFx5ZKZihwe4SxLYSy6Oa02rOJnGs="
          alt="image">
          <div class="category-title">Stays</div>
        </div>
      </SplideTrack>
      <SplideTrack class="splide__slide p-2">
        <div class="rounded-xl overflow-hidden shadow-md"
        style="min-width: 148px; height: 148px">
          <img width="148" height="100" src="https://media.istockphoto.com/photos/making-healthy-meal-picture-id1162184637?k=20&m=1162184637&s=612x612&w=0&h=NMY_uqGlL61zdGcFx5ZKZihwe4SxLYSy6Oa02rOJnGs="
          alt="image">
          <div class="category-title">Stays</div>
        </div>
      </SplideTrack>
      <SplideTrack class="splide__slide p-2">
        <div class="rounded-xl overflow-hidden shadow-md"
        style="min-width: 148px; height: 148px">
          <img width="148" height="100" src="https://media.istockphoto.com/photos/making-healthy-meal-picture-id1162184637?k=20&m=1162184637&s=612x612&w=0&h=NMY_uqGlL61zdGcFx5ZKZihwe4SxLYSy6Oa02rOJnGs="
          alt="image">
          <div class="category-title">Stays</div>
        </div>
      </SplideTrack>
      <SplideTrack class="splide__slide p-2">
        <div class="rounded-xl overflow-hidden shadow-md"
        style="min-width: 148px; height: 148px">
          <img width="148" height="100" src="https://media.istockphoto.com/photos/making-healthy-meal-picture-id1162184637?k=20&m=1162184637&s=612x612&w=0&h=NMY_uqGlL61zdGcFx5ZKZihwe4SxLYSy6Oa02rOJnGs="
          alt="image">
          <div class="category-title">Stays</div>
        </div>
      </SplideTrack>
      <SplideTrack class="splide__slide p-2">
        <div class="rounded-xl overflow-hidden shadow-md"
        style="min-width: 148px; height: 148px">
          <img width="148" height="100" src="https://media.istockphoto.com/photos/making-healthy-meal-picture-id1162184637?k=20&m=1162184637&s=612x612&w=0&h=NMY_uqGlL61zdGcFx5ZKZihwe4SxLYSy6Oa02rOJnGs="
          alt="image">
          <div class="category-title">Stays</div>
        </div>
      </SplideTrack>
      <!-- </div> -->
    </Splide>
  </div>
  <h1 class="mt-4"> Top-rated Experiences</h1>
  <p class="my-1">Book activities led by local hosts on your trip</p>
  <div class="my-3">
    <SliderComponent>
      <SplideTrack class="splide__slide py-2 pr-2"
        v-for="place in allPlaces"
        :key="place.id"
      >
        <div
        style="min-width: 160px; height: auto">
          <img width="160" height="105" src="https://media.istockphoto.com/photos/making-healthy-meal-picture-id1162184637?k=20&m=1162184637&s=612x612&w=0&h=NMY_uqGlL61zdGcFx5ZKZihwe4SxLYSy6Oa02rOJnGs="
          alt="image">
          <div class="top-title">
            <h4>{{ place.address }}</h4>
            <p>{{ place.description }}</p>
          </div>
        </div>
      </SplideTrack>
    </SliderComponent>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import { Splide, SplideTrack } from '@splidejs/vue-splide';
import { mapActions, mapGetters } from 'vuex';
import SearchBar from '@/components/SearchBar.vue';
import SliderComponent from '@/components/SliderComponent.vue';

export default {
  name: 'HomeView',
  computed: { ...mapGetters(['allPlaces']) },
  components: {
    Splide,
    SplideTrack,
    SearchBar,
    SliderComponent,
  },
  methods: {
    ...mapActions(['fetchPlaces']),
  },
  created() {
    this.fetchPlaces();
    // eslint-disable-next-line no-console
    console.log('places: ', this.allPlaces);
  },
};

</script>
<style lang="css" scoped>
@import '@splidejs/vue-splide/css';
</style>
