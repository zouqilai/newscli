<template>
	<div class="template">
        <div class="loader" v-load-more="loaderMore">
    		<div v-for="(item,key) in redian.data" class="op-wx-new-item">
    			<a v-if="item.imgnum" v-bind:href="'detail/'+redian.fid+'/'+item.id" class="op-wx-new-title border-1px"><h3>{{item.title}}</h3>
    				<aside class="op-wx-new-img">
    					<figure>
    						<img :src="item.img" :alt="item.title" />
    					</figure>
    				</aside>
    				<blockquote class="op-wx-new-q">
    					<em class="op-wx-new-em"><span>{{item.count}}</span><span class="icon_com"></span></em>
    				</blockquote>
    			</a>
                <a v-else v-bind:href="'detail/'+redian.fid+'/'+item.id" class="op-wx-new-title op-wx-new-flex border-1px"> 
                    <figure class="op-wx-new-lfimg"> 
                        <img :src="item.img" :alt="item.title" /> 
                    </figure> 
                    <aside class="op-wx-new-rt"> 
                        <h2>{{item.title}}</h2> 
                        <blockquote class="op-wx-new-q"> 
                            <em>{{item.count}}</em>
                            <!-- <mark></mark> -->
                        </blockquote> 
                    </aside>
                </a>
    		</div>
            <div class="op-wx-new-loading" v-show="showLoading">加载数据中...</div>
        </div>
	</div>
</template>

<script>
//import Vue from 'vue';
import {getOrderList} from '../../service/getData';
import {loadMore} from '../../common/js/mixin';
export default {
  data() {
        return {
            redian: {
                type:Array
            },
            urlName: {
                type:String
            },
            offset: 0, 
            preventRepeat: false,  //防止重复获取
            showLoading: false, //显示加载动画
        };
    },
    mixins: [loadMore],
    watch:{
        urlName:function(old,newv){
            this.urlName = old;
            this.getAjax(this.urlName);
        }
    },
    beforeRouteEnter(to, from, next){
        next(vm=>{
            vm.urlName = to.name;
            //Vue.set(vm,'urlName',to.name);
        })
    },
    beforeRouteLeave(to, from, next){
        this.urlName = to.name;
        next();
    },
    methods:{
        getAjax(urlName){
            const _this = this;
            const response = getOrderList(urlName);
            response.then(res=>{
                if(!res.errno){
                    _this.redian = res.data
                }
            });
            //console.log([...response]);
            //this.redian = response.data;
            // const apiUrl = '/api/'+this.urlName;
            // this.$http.get(apiUrl).then(response => {
            //     // 成功
            //     // get body data
            //     response = response.body;
            //     const ERR_OK = 0;
            //     if (response.errno === ERR_OK) {
            //         this.redian = response.data;
            //     }
            // }, response => {
            //     // erro
            // });
        },
        //加载更多
        loaderMore(){
            //alert('调用自定义指令方法');
            const _this = this;
            if (this.preventRepeat) {
                return
            }
            this.preventRepeat = true;
            this.showLoading = true;
            this.offset += 10;
            //获取信息
            let response = getOrderList(this.urlName);
            //this.orderList = [...this.orderList, ...res];
            response.then(res=>{
                if(!res.errno){
                    // if (res.data.data.length < 10) {
                    //     return
                    // }
                    _this.$nextTick(()=>{
                        _this.redian.data = _this.redian.data.concat(res.data.data);
                    });
                    
                }
            });
            //this.hideLoading();
            
            this.preventRepeat = false;
        }
    },
    created() {
        
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.op-wx-new-item
    margin:.1rem .1rem
.op-wx-new-title
    font-size:.24rem
    text-align: left
    line-height: 0.36rem
    padding-bottom: 0.15rem
    display: block
    
    .op-wx-new-img
        margin:.1rem 0
        figure
            line-height:0
            img
                width:100%
    .op-wx-new-q
        font-size:.1rem
        color:#888
        line-height: 1
    .op-wx-new-lfimg
        display: block
        width: 2rem
        height: 1.34rem
        background-size: .64rem .5rem!important
        position: relative
        margin-right: .26rem
        overflow: hidden
    .op-wx-new-rt
        flex: 1 1 0%;
        width: 0;
.op-wx-new-flex
    display:flex
.op-wx-new-loading
    font-size:.25rem
    text-align:center
    padding:.28rem 0
</style>