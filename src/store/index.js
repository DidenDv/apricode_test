import Vue from 'vue';
import Vuex from 'vuex';
import {httpClient} from "@/modules/shared/services";
import {DEFAULT_COUNT_PHOTOS} from "@/helper/defaultCountPhotos";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photos: null,
    randomPhoto: null,
    requestError: null,
    countListPhotos: 16
  },
  mutations: {
    updatePhotos(state, payload) {
      state.photos = payload;
    },
    updateRandom(state, payload) {
      state.randomPhoto = payload;
    },
    updateRequestError(state, payload) {
      state.requestError = payload;
    },
    updateShowMore(state, payload) {
      state.countListPhotos = payload;
    },
    updateSearch(state, payload) {
      state.photos = payload;
    }
  },
  actions: {
    getPhotos({ commit }, data) {
      const config = {
        params: {
          per_page: data.count
        }
      }

      httpClient.get(`/search/photos?query=${data.type}`, config)
          .then((response) => {
            commit('updatePhotos', response.data.results);
          })
          .catch((error) => {
            commit('updateRequestError', error);
          })
    },
    getRandomPhoto({ commit }) {
      httpClient.get('/photos/random')
          .then((response) => {
            commit('updateRandom', response.data);
          })
          .catch((error) => {
            commit('updateRequestError', error);
          })
    },
    onShowMore({ commit, state }) {
      const value = (state.countListPhotos + DEFAULT_COUNT_PHOTOS);

      commit('updateShowMore', value)
    }
  }
});
