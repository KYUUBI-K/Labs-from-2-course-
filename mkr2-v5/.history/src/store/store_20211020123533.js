import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        fornitureList: [
            {
                
            }
        ],
    },
    getters: {
        getFurnitureList: ({ fornitureList }) => fornitureList,
    },
    mutations: {
        addNewFurniture(state, dataObj) {
            state.fornitureList.push({
                ...dataObj
            })
        },
    },
    actions: {
        addFurniture({commit}, data) {
            commit('addNewFurniture', data)
        },
    }
})

export default store