// 引入并use
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


// 定义数据
var state = {
  count: 1,
  news_list: []
};

// 定义方法：主要用于改变state中的数据
var mutations = {
  CountAdd() {
    ++state.count;
  },
  CountReduce() {
    --state.count;
  },
  UpdateNewsList(state, data) {
    state.news_list = data
  }
};

var getters = {
  ComputerCount: (state) => {
    return state.count ** 2
  }
};


// 定义Actions
/*
Action 类似于 mutation，不同在于：
		Action 提交的是 mutation，而不是直接变更状态。
		Action 可以包含任意异步操作。
*/
var actions = {
  incMutationsCount(context) {    /*因此你可以调用 context.commit 提交一个 mutation*/
    context.commit('CountAdd');
    /*执行 mutations 里面的incCount方法 改变state里面的数据*/
  }
};

// 实例化vuex
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});


// 暴露store
export default store
