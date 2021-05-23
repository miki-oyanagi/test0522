import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[createPersistedState()],
  state: {
    data:"",
  },
  mutations: {
    data(state,payload){
      state.data = payload;
    },
  },
  actions: {
    async data({commit},{data}){
      const responseRegister =await axios.post(
        "http://127.0.0.1:8000/",
      {
        params:{
          data:data,
        },
      }
    );
    commit("sata",responseRegister.data.text);
  },
 },
});
