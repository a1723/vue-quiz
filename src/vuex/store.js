import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: { // тут хранятся все данные, переменные, объекты и т.д.
      questions: [],
      answers: [],
  },
  mutations: { // с помощью мутаций меняем данные состояний в state. СИНХРОННЫ. ОДИН В ОДИН МОМЕНТ.
    SET_QUESTIONS_TO_STATE: (state, questions) => {
      state.questions = questions;
    }
  },
  actions: { // ЭКШНЫ(методы). АСИНХРОННЫ, МНОГО В ОДИН МОМЕНТ.
      GET_QUESTIONS_FROM_API({commit}) {
        return axios('http://localhost:3000/questions', {
          method: "GET"
        })
        .then((questions) => {
          commit('SET_QUESTIONS_TO_STATE', questions.data);
          return questions;
        })
        .catch((error)=> {
          console.log(error);
          return error;
        })
      }
    },
  getters: { // даёт возможность получить данные из state
      QUESTIONS(state) {
        return state.questions;
      },
    }
})

export default store;
