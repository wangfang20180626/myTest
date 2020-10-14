<template>
  <section>
      <div class="hello" ref="hello">
        <h1>测试Vuex</h1>
        <h3>{{this.$store.state.count}}</h3>
        <h2>通过getter获取计算后的age{{getCount}}</h2>
        <h2>count:{{count}}</h2>
        
        <h1>{{str}}</h1>
        <h3>{{message}}</h3>
        <input type="text" v-model="message">
        <h4>{{reversedMessage1}}</h4>
        <p>-------------------</p>
        <h4>{{reversedMessage()}}</h4>
        <h1>{{nowTime}}</h1>
        <h1>{{getNowTime()}}</h1>
        <p>请输入姓名全程</p>
        <input type="text" placeholder="姓氏" v-model="firstName">
        <input type="text" placeholder="名称" v-model="lastName">
        <input type="text" placeholder="名称" v-model="fullName">
        <h3>{{firstName}}</h3>
        <h3>{{lastName}}</h3>

        <template v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Enter your username">
        </template>
        <template v-else>
            <label>Email</label>
            <input placeholder="Enter your email address">
         </template>
         <button @click="toggleLoginType">toggle logintype</button>
      </div>
      <!-- <el-button type="danger" @click="get">点击</el-button>
      <el-button type="danger" @click="get">点击</el-button> -->
  </section>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      str:'Hello world Vue',
      message:"123456",
      time:'',
      firstName:"",
      lastName:"",
      loginType:"username",
    }
  },
  beforeCreate(){
    // console.log('-------初始化之前------')
    // console.log('str===>')
    // console.log(this.str)
    // console.log('dom元素==>')
    // console.log(this.$refs('hello'))
  },
  created(){
    // console.log('-------初始化后------')
    // console.log('str===>')
    // console.log(this.str)
    // console.log('dom元素==>')
    // console.log(this.$refs('hello'))
    let arr=[
      {
        name:'数学',
        score:70
      },
      {
        name:'语文',
        score:90
      },
      {
        name:'化学',
        score:90
      },
      {
        name:'化学',
        score:78
      },
      {
        name:'英语',
        score:67
      },
    ];
    this.sortArray(arr);
      console.log(111);
      console.log(this.$refs['hello']);
      this.$nextTick(() => {
        console.log(222);
        console.log(this.$refs['hello']);
      });

      //测试使用sympol创建常量
      
      try {
        var color = "green"; // green 引发异常
        var colorName = this.getConstantName(color);
    } catch (e) {
        var colorName = "unknown";
        console.log(e.message, e.name); // 传递异常对象到错误处理
}

  },
  beforeMount(){
    // console.log('-------挂载之前------')
    // console.log('str===>')
    // console.log(this.str)
    // console.log('dom元素==>')
    // console.log(this.$refs('hello'))
  },
  mounted(){
    // console.log('-------挂载之后------')
    // console.log('str===>')
    // console.log(this.str)
    // console.log('dom元素==>')
    // console.log(this.$refs('hello'))

      console.log(333);
      console.log(this.$refs['hello']);
      this.$nextTick(() => {
        console.log(444);
        console.log(this.$refs['hello']);
      });
  },
  computed:{
      reversedMessage1:function(){
        return this.message.split('').reverse().join()
      },
      nowTime:function(){
        console.log('1111111')
        return Date.now()+this.message
      },
      fullName:{
        get(){
            return this.firstName+''+this.lastName
        },
        set(newValue){
          debugger
          var names = newValue.split('');
          this.firstName=names[0];
          this.lastName=names[names.length-1]
        }
      },
      count(){
        return this.$store.state.count
      },
      getCount(){
        return this.$store.getters.getAge
      }

  },
  methods:{
    get(){
      this.str='你好 vue';
      console.log(this.$refs['hello'].innerHTML);
      this.$nextTick(()=>{
        console.log(this.$refs['hello'].innerHTML);
      })
    },
    reversedMessage(){
        return this.message.split('').reverse().join()
      },
    getNowTime(){
        console.log('time')
        this.time=Date.now();
        return this.time+this.message
    },
    toggleLoginType(){
      if(this.loginType=='username'){
        this.loginType='emailname'
      }else{
        this.loginType='username'
      }
    },
    sortArray(arr){
      let sortedArr=[];
      let sortObj={
      };
      arr.forEach(item=>{
        if(!sortObj[item.name]){
          sortObj[item.name]={name:item.name,datas:[]}
          sortedArr.push(sortObj[item.name]);
        }
        sortObj[item.name].datas.push(item)
      })
      console.log("--------------");
      console.log(sortedArr);
    },
    


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
