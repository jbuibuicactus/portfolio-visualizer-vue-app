//store/modules/auth.js

import axios from 'axios';
import UserDataService from '../../services/UserDataService';

const state = {
    user: null,
    posts: null,
};
const getters = {
    isAuthenticated: state => !!state.user,    
    StatePosts: state => state.posts,
    StateUser: state => state.user,
};
const actions = {
    async Register({dispatch}, form) {
        //await axios.post('register', form)
        await UserDataService.create(form)
        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('password', form.password)
        await dispatch('LogIn', UserForm)
      },

      async LogIn({commit}, form) {
        //await axios.post('login', User)
        UserDataService.findByUsername(form.username)
          .then(response => {
            console.log(response)
            let accountpassword = response.data[0].password
            if (accountpassword != form.password) {
              this.$router.push("/login");
            } else {
              commit('setUser', response.data[0])
            }
          })
          .catch(err => {
            console.log(err);
          });
        //await commit('setUser', User.get('username'))
      },
      async CreatePost({dispatch}, post) {
        await axios.post('post', post)
        await dispatch('GetPosts')
      },
      async GetPosts({ commit }){
        let response = await axios.get('posts')
        commit('setPosts', response.data)
      },
      async LogOut({commit}){
        let user = null
        commit('LogOut', user)
      }
            
};
const mutations = {
    setUser(state, username){
        state.user = username
    },
    setPosts(state, posts){
        state.posts = posts
    },
    LogOut(state){
        state.user = null
        state.posts = null
    },
};
export default {
  state,
  getters,
  actions,
  mutations
};
