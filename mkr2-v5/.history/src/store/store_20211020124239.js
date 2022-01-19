import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        fornitureList: [
            {
                name: 'wardrobe',
                model: 'wooden',
                color: "black",
                price: 4000
            },
            {
                name: 'table',
                model: 'wooden',
                color: "white",
                price: 2000
            },
            {
                name: 'chair',
                model: 'wooden',
                color: "yellow",
                price: 500
            },
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