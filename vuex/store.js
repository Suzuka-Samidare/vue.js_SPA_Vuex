import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
  actions: {
    async doUpdate({commit}, searchWord) {
      const payload = {
        data: '',
      };
      await axios.get('http://api.imas-db.jp/character/list?type=1')
        .then((res) => {
          console.log(res.data.character_list[3]);
          payload.data = res.data.character_list[3]
        });
      commit('setResponce',payload);
    }
  },
  mutations: {
    setResponce(state, payload) {
      state.responce = payload.data
    }
  },
  state: {
    responce: ''
  },
  getters: {
    resultResponce(state) {
      return state.responce
    },
  },
})

export default store
