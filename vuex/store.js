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
      // アイマスデータベースAPI
      await axios.get('http://api.imas-db.jp/character/lookup?name=' + searchWord)
        .then((res) => {
          console.log(res.data.character_list[0]);
          payload.data = res.data.character_list[0]
        });
      commit('setResponse',payload);
    }
  },
  mutations: {
    setResponse(state, payload) {
      state.response = payload.data
    }
  },
  state: {
    response: []
  },
  getters: {
    resultResponse(state) {
      return state.response
    },
  },
})

export default store
