import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  headerStatus:true,
  count:1
};
const mutations={
  changeHeaderStutas(state,status){
    state.headerStatus = status;
  },
};
// const actions ={
//     showHeaderStutasAction:({context},showParas)=>context('setUserList',showParas)
// }
export default new Vuex.Store({
  // state: {
  //   showHeader:"this is showheader",
  //   count:1
  // },
  state,
  mutations,
})
