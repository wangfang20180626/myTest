import Vue from 'vue';//引入vue
import Vuex from 'vuex';//引入vuex
//使用vuex
Vue.use(Vuex)
//创建vuex实例
const store = new Vuex.Store({
    state:{
        count:1,
        age:0
    },
    mutations:{

    },
    /**
     * getter相当于vue中的computed计算属性，getter的返回值会根据他的依赖被缓存起来，且只有当他的依赖值发生了变换才会被重新计算
     * 通过属性访问getter会暴露为store getters对象，你可以以属性的形式访问这些值；
     *   this.$store.getters.xxx
     * getters可以用于监听、state中值的变化，返回计算后的结果
     */
    getters:{
        getAge(state){
            return state.age +=10
        }
    }
})
export default store //导出store