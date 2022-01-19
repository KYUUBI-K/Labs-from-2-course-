import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        householdGoodsList: [
            {
                name: 'wardrobe',
                category: 'wooden',
                producer: "black",
                price: 4000
            },
            {
                name: 'table',
                category: 'wooden',
                producer: "white",
                price: 2000
            },
            {
                name: 'chair',
                category: 'wooden',
                producer: "yellow",
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
        delHouseholdGoods(state, dataObj) {
            state.householdGoodsList = state.householdGoodsList.filter(item => (item === dataObj))
        },
    },
    actions: {
        addHouseholdGoods({commit}, data) {
            commit('addNewHouseholdGoods', data)
        },
        delateHouseholdGoods({commit}, data) {
            commit('delHouseholdGoods', data)
        },
    }
})

export default store