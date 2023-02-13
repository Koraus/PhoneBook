import axios from "axios";

export const state = () => ({
    list: [],
    sortBy: '',
    searchNumber: '',
    numberPerPage: 5, 
    currentPage: 1,

})

export const getters = {
    getNumbersList(state) {
        return state.list
    },
    getSortBy(state){
        return state.sortBy
    },
    getSearchNumber(state){
        return state.searchNumber;
    },
    getNumbersPerPage(state){
        return state.numberPerPage;
    },
    getCurrentPage(state){
        return state.currentPage
    },
    

}

export const mutations = {
    updNumbersList(state, list) {
        state.list = list
    },
    selectSorting(state, sortBy){
        state.sortBy = sortBy
    },
    setSearchNumber(state, searchNumber){
        state.searchNumber = searchNumber;
    },
    setCurrentPage (state, page){
        state.currentPage = page;
    }
}
export const actions = {

    selectSortingOption(context, payload){
        context.commit('selectSorting', payload)
    },
    updSearchNumber(context, payload) {
        context.commit('setSearchNumber', payload)
    },
    updCurrentPage(context, payload){
        context.commit('setCurrentPage', payload)
    },
    resetCurrentPage(context){
        context.commit('setCurrentPage', 1)
    },
    async sendRequest (context, payload) {
        const queryURL = payload
        const list = await axios.get(queryURL);
        context.commit('updNumbersList', list.data)

    },
    async deleteNumber(context, numberId) {
        const URL = `https://63e38077619fce55d41a5d49.mockapi.io/phonesNumbers/${numberId}`;
        await axios.delete(URL);

    },
    async editNumber(context, payload) {
        const URL = `https://63e38077619fce55d41a5d49.mockapi.io/phonesNumbers/${payload.id}`
        await axios.put(URL, payload);

    },
    async addNewNumber(context, payload) {
        const URL = "https://63e38077619fce55d41a5d49.mockapi.io/phonesNumbers/";
        await axios.post(URL, payload);
    },
    }   
    
