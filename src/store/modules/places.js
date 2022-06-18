// import axios from 'axios';

const PLACES_URL = 'http://localhost:3000/api/v1/places';

const state = {
  places: [],
  place: {},
};

const getters = {
  allPlaces: (state) => state.places,
  onePlaces: (state) => state.place,
};

const actions = {
  async fetchPlaces({ commit }) {
    const response = await fetch(PLACES_URL);
    const data = await response.json();
    commit('SET_PLACES', data);
  },
};

const mutations = {
  SET_PLACES: (state, payload) => {
    state.places = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
