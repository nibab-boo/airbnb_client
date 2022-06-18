import { createStore } from 'vuex';
import places from '@/store/modules/places';

export default createStore({
  modules: {
    places,
  },
});
