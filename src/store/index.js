import { createStore } from 'vuex';
import places from '@/store/modules/places';
import keywords from './modules/keywords';

export default createStore({
  modules: {
    places,
    keywords,
  },
});
