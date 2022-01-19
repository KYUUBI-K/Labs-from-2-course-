import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    search:"",
    taskList:[
        {
          id:1, title:'Парацетамол', price:'50', active_substance:'paracetamol',
        },
        {
            id:2, title:'Панкреатин', price:'20', active_substance:'pancreatine',

        },
        {
            id:3, title:'Дуфалак', price:'50', active_substance:'lactulose',

        }
    ]
  },
  getters:{
      getTaskList:(state)=>state.taskList
  },
  mutations:{
    addNewTask(state, dataObj) {
      state.taskList.push({
        id: uuidv4(),
        ...dataObj,
      })
    },
    deleteTask(state,dataobj){
        state.taskList = state.taskList.filter(item=>(item.id != dataobj))
    },
  },
  actions:{
    addTask({ commit }, data) {
      commit('addNewTask', data)
    },
    delete({commit},data){
        commit('deleteTask',data)
    },
  }
  
})

export default store