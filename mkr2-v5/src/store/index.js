import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        personList: [
            {
                name: 'ПІБ',
                addres: 'Адрес',
                course: "Курс",
                group: 'Група',
                averageMark: 'Середній бал'
            },
            {
                name: 'Дутка А.А.',
                addres: 'с.Соломоново',
                course: "2",
                group: '2',
                averageMark: '69'
            },
            {
                name: 'Боднар Є.О.',
                addres: 'м.Чоп',
                course: "2",
                group: '2',
                averageMark: '79'
            },
        ],
    },
    getters: {
        getPersonList: ({ personList }) => personList,
    },
    mutations: {
        addNewPerson(state, dataObj) {
            state.personList.push({
                ...dataObj
            })
        },
        delPerson(state, name) {
            state.personList = state.personList.filter(item=>(item.name != name))
            // state.personList = state.personList.filter(item=>(item.addres != addres))
            // state.personList = state.personList.filter(item=>(item.course != course))
            // state.personList = state.personList.filter(item=>(item.group != group))
            // state.personList = state.personList.filter(item=>(item.averageMark != averageMark))
        },
        filterNameMutation(state, name) {
            state.personList = state.personList.filter(item=>(item.name === name))
        },
        filterAddresMutation(state, addres) {
            state.personList = state.personList.filter(item=>(item.addres === addres))
        },
        filterCourseMutation(state, course) {
            state.personList = state.personList.filter(item=>(item.course === course))
        },
        filterGroupMutation(state, group) {
            state.personList = state.personList.filter(item=>(item.group === group))
        },
        filterAverageMarkMutation(state, averageMark) {
            state.personList = state.personList.filter(item=>(item.averageMark === averageMark))
        },
    },
    actions: {
        addPerson({commit}, data) {
            commit('addNewPerson', data)
        },
        deletePerson({commit}, data) {
            commit('delPerson', data)
        },
        filterNameAction({commit}, data) {
            commit('filterNameMutation', data)
        },
        filterAddresAction({commit}, data) {
            commit('filterAddresMutation', data)
        },
        filterCourseAction({commit}, data) {
            commit('filterCourseMutation', data)
        },
        filterGroupAction({commit}, data) {
            commit('filterGroupMutation', data)
        },
        filterAverageMarkAction({commit}, data) {
            commit('filterAverageMarkMutation', data)
        },
        
    }
})

export default store