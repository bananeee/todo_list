import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
    },
    mutations: {
        pushItemToList(state, item) {
            state.list.push(item);
        },
        deleteItemInList(state, itemId) {
            state.list = state.list.filter(item => item.id !== itemId);
        },
    },
    actions: {
        addTodoItem({commit}, item) {
            commit('pushItemToList', item);
        },
        deleteTodoItem({commit}, itemId) {
            commit('deleteItemInList', itemId);
        }
    },
    modules: {}
})
