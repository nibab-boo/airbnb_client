const PLACES_URL = 'http://localhost:3000/api/v1/places';

const state = {
  keyword: '',
};

const getters = {
  keywordValue: (state) => state.keyword,
  keywordExists: (state) => {
    if (state.length > 0) {
      return true;
    }
    return false;
  },
};

const actions = {
  async fetchWithSearch({ commit }, keyword) {
    const response = await fetch(`${PLACES_URL}?query=${keyword}`);
    const data = await response.json();
    commit('SET_PLACES', data);
  },
  async getKeyword({ commit }, data) {
    commit('SET_KEYWORD', data);
  },
};

const mutations = {
  SET_KEYWORD: (state, payload) => {
    state.keyword = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
