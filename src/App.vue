<template>
  <section id="app">
    <div class="op-wx-swiper" v-show="isShowDetai" ref="tabWrapper">
      <div class="op-wx-swiper-box" ref="tabContent">
        <ul>
          <li ref="tabitem0"><router-link to="/remen">热门</router-link></li>
          <li ref="tabitem1"><router-link to="/jiatingjiaoyu">家庭教育</router-link></li>
          <li ref="tabitem2"><router-link to="/xuexifangfa">学习方法</router-link></li>
          <li ref="tabitem3"><router-link to="/xuexijiqiao">学习技巧</router-link></li>
          <li ref="tabitem4"><router-link to="/xuexixiguan">学习习惯</router-link></li>
          <li ref="tabitem5"><router-link to="/xuexijiqiao">学习技巧</router-link></li>
          <li ref="tabitem6"><router-link to="/xuexixiguan">学习习惯</router-link></li>
        </ul>
      </div>
      <div class="border-1px"></div>
    </div>
    <router-view :isShowDetai="isShowDetai" @showDetai="fn"/>

  </section>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  data(){
    return {
      selected: 0,
      isShowDetai:false
    }
  },
  // created() {
  //   this.$nextTick(() => {
  //     //this.isShowDetai=true;
  //     //this._initScroll();
  //   });
  // },
  mounted(){
    this.isShowDetai=true;
    this.$nextTick(() => {
      //this.isShowDetai=true;
      this._initScroll();
    });
  },
  methods:{
      fn(data){
          //父亲接收儿子的数据函数
          return this.isShowDetai=data;
      },
      _initScroll() {
        let width=0;
        
        //tab的长度，后期取完数据，可以用.length来计算
        for (let  i = 0; i <7; i++) {
            width+=this.$refs['tabitem'+i].getBoundingClientRect().width
        }
        this.$refs.tabContent.style.width=width+'px';

        this.meunScroll = new BScroll(this.$refs.tabWrapper, {
            scrollX:true,
            scrollY:false,
            eventPassthrough:'vertical'
        });
      },
      isShowDetaiFunction(){
        if(this.$route.name == 'detail'){
          this.isShowDetai=false;
        }else{
          this.isShowDetai=true;//解决回退没有tab
        }
      }
  },
  components: {
      
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "isShowDetaiFunction"
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.op-wx-swiper
  overflow: hidden
  width: 100%
.op-wx-swiper-box
  display:flex
  -width:25rem
  -padding: 0 0.15rem;
  li
    padding:.22rem .1rem
    font-size:.3rem
    float:left
</style>
