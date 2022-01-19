import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        householdGoodsList: [
            {
                name: 'Пилосос',
                category: 'Електротовари',
                producer: "Samsung",
                price: 3200
            },
            {
                name: 'Утюг',
                category: 'Електротовари',
                producer: "Filips",
                price: 1800
            },
            {
                name: 'Мікровоновка',
                category: 'Електротовари',
                producer: "LG",
                price: 2500
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
        delHouseholdGoods(state, name, category, producer, price) {
            state.householdGoodsList = state.householdGoodsList.filter(item=>(item.name != name))
            state.householdGoodsList = state.householdGoodsList.filter(item=>(item.category != category))
            state.householdGoodsList = state.householdGoodsList.filter(item=>(item.producer != producer))
            state.householdGoodsList = state.householdGoodsList.filter(item=>(item.price != price))
        },
        filterNameMutation(state, name) {
            state.householdGoodsList = state.householdGoodsList.filter(item=>(item.name === name))
        },
        filterСategoryMutation(state, category) {
            state.householdGoodsList = state.householdGoodsList.filter(item=>(item.category === category))
        },
        filterProducerMutation(state, producer) {
            state.householdGoodsList = state.householdGoodsList.filter(item=>(item.producer === producer))
        },
        filterPriceMutation(state, price) {
            state.householdGoodsList = state.householdGoodsList.filter(item=>(item.name === price))
        },
    },
    actions: {
        addHouseholdGoods({commit}, data) {
            commit('addNewHouseholdGoods', data)
        },
        delateHouseholdGoods({commit}, data) {
            commit('delHouseholdGoods', data)
        },
        filterNameAction({commit}, data) {
            commit('filterNameMutation', data)
        },
        filterСategoryAction({commit}, data) {
            commit('filterСategoryMutation', data)
        },
        filterProducerAction({commit}, data) {
            commit('filterProducerMutation', data)
        },
        filterNameAction({commit}, data) {
            commit('filterNameMutation', data)
        },
        
    }
})

export default store