import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:'李慕然',
    age:12,
    count:0,
    disabled:false,
    Number:0,
    list:[
      {id:1,name:'张三'},
      {id:2,name:'李四'},
      {id:3,name:'王五'}
    ],
    listarry:['sky', 'wind', 'snow', 'sun']
  },
  mutations: {
    addconunt(state){
      state.count ++
      state.disabled = false
    },
    redeuce(state){ 
      state.count --
      if(state.count == -1){
        state.count = 0
        state.disabled = true
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
