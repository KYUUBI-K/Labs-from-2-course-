import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    search:"",
    taskList:[
        {
          id:1, title:'Шарова', company:'BMW',year_of_issue:2014
        },
        {
          id:2, title:'Тормозні діски', company:'Mercedes',year_of_issue:2017
        },
        {
          id:3, title:'Бензонасос', company:'Audi',year_of_issue:2021
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
  },
  actions:{
    addTask({ commit }, data) {
      commit('addNewTask', data)
    },
  }
  
})

export default store