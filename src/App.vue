<template>
  <section id="app">
    <div class="op-wx-swiper" v-if="!isShowDetai">
      <div class="op-wx-swiper-box">
        <!-- <router-link class="op-wx-swiper-item" :to="{path:'/remen',query:{urlName:'remen'}}">热门</router-link> -->
        <router-link class="op-wx-swiper-item" to="/remen">热门</router-link>
        <router-link class="op-wx-swiper-item" to="/jiatingjiaoyu">家庭教育</router-link>
        <router-link class="op-wx-swiper-item" to="/xuexifangfa">学习方法</router-link>
        <router-link class="op-wx-swiper-item" to="/xuexijiqiao">学习技巧</router-link>
        <router-link class="op-wx-swiper-item" to="/xuexixiguan">学习习惯</router-link>
        <router-link class="op-wx-swiper-item" to="/xuexijiqiao">学习技巧</router-link>
        <router-link class="op-wx-swiper-item" to="/xuexixiguan">学习习惯</router-link>
        
      </div>
    </div>
    <div class="border-1px" v-if="!isShowDetai"></div>
    <router-view :m="isShowDetai" @showDetai="fn"/>
  </section>
</template>

<script>
export default {
  data(){
    return {
      selected: 0,
      isShowDetai:false
    }
  },
  created() {
    
  },
  methods:{
      fn(data){
          //父亲接收儿子的数据函数
          return this.isShowDetai=data;
      }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.op-wx-swiper
  overflow: hidden
  width: 100%
.op-wx-swiper-box
  display:flex
  width:25rem
  padding: 0.1rem 0.15rem;
  .op-wx-swiper-item
    padding:0 0.08rem
    font-size:.25rem
</style>
