####编译部署和安装
执行 npm install 安装依赖<br>
执行 npm test 编译开发版，或执行 npm build 编译生产版.<br>
npm run dev 启动项目（先把config/index.js里的host改为loacalhost或你本地的ip，在启动项目）
####文件结构

```
.
├── src
│   ├── common          //公共文件
│   │    ├── js
│   │    │   └──mixin.js  //自定义指令  如load-more
│   │    └── stylus
│   ├── components   //组件
│   ├── config     //配置
│   │ 	├──env.js  //项目基础配置，不通，ajax-url等
│   │	├──fetch.js //ajax方法
│   │	└──mUtils.js  //一些公共方法
│   ├── router           //路游
│   ├── service     //异步接口文档
│   ├── App.vue        
│   └── main.js	    //入口文件
├── static   //静态文件
└── index.html
```

#### 遇到的问题
1、获取路游的路径名称
<pre>
1> 写在remen.vue
export default {
  data() {
        return {
            redian: [],
            urlName: ''
        };
    },
    beforeRouteEnter(to, from, next){
        next(vm=>{
            vm.urlName = to.name;
        })
    },
    created() {
        console.log(this.urlName);
        
    }
}
//created在路游实例化之前已经加载，没有获取修改后的值，这部分没有解决
//改为wach监听，然后发起异步请求
//beforeRouteLeave使用时，必须使用next()
//beforeRouteEnter不能使用this，可以在next里使用vm实例

2> 路游监听
</pre>
2、子向父亲传值
<pre>
//子
created(){
    	this.$emit('showDetai',true);//向父级传递数据
}
//父
router-view :m="isShowDetai" @showDetai="fn"/>
methods:{
   fn(data){
          //父亲接收儿子的数据函数
          return this.isShowDetai=data;
   }
}
</pre>
3、新闻列表跳详细页面，有tab的几秒闪动
<pre>
//App.vue有个布尔形式的值isShowDetai=false，在除detail的路游中进来修改isShowDetai=true，使其tab显示出来,在进入detail页面时修改isShowDetai=false值在传回App.vue，使其tab隐藏(利用路游监听，路游没改变不能监听改变)
mounted(){
	this.isShowDetai=true;
	//页面上来tab是隐藏的，需要在显示后重新更新dom，所以选择mounted
    this.$nextTick(() => {
      //this.isShowDetai=true;
      this._initScroll();
    });
},
methods:{
	isShowDetaiFunction(){
        if(this.$route.name == 'detail'){
          this.isShowDetai=false;
        }else{
        	this.isShowDetai=true;//解决回退没有tab
        }
    }
},
watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "isShowDetaiFunction"
}

将a的:href跳转链接删除，改为click事件，问题完美解决
《a v-if="item.imgnum" v-on:click="toLink(item.id)"》
toLink(id){
   //'detail/'+redian.fid+'/'+item.id
   console.log(232);
   this.$router.push({name:'detail',params:{fid:this.redian.fid,id:id}});
}
</pre>
4、获取