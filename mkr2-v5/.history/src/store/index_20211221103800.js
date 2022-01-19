import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        householdGoodsList: [
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
        getHouseholdGoodsList: ({ householdGoodsList }) => householdGoodsList,
    },
    mutations: {
        addNewHouseholdGoods(state, dataObj) {
            state.householdGoodsList.push({
                ...dataObj
            })
        },
    },
    actions: {
        addHouseholdGoods({commit}, data) {
            commit('addNewHouseholdGoods', data)
        },
    }
})

export default store