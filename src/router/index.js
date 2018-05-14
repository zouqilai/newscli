import Vue from 'vue'
import Router from 'vue-router'
import remen from '@/components/remen/remen'
//const remen = () => import(/* webpackChunkName: "group-home" */  '@/components/remen/remen');
//import jiatingjiaoyu from '@/components/jiatingjiaoyu/jiatingjiaoyu';
const jiatingjiaoyu = () => import(/* webpackChunkName: "group-home" */  '@/components/jiatingjiaoyu/jiatingjiaoyu');
const detail = () => import(/* webpackChunkName: "group-home" */  '@/components/detail/detail');

Vue.use(Router)

export default () => {
	return new Router({
	  routes: [
	  	{
	  		path: '/remen',
	    	name: 'remen',
	    	component: remen
	  	},
	  	{
	  		path: '/jiatingjiaoyu',
	  		name: 'jiatingjiaoyu',
	    	component: remen
	  	},
	  	{
	  		path: '/detail/:fid/:id',
	    	name: 'detail',
	    	component: detail
	  	},
	    {
	      path: '',
	      //name: 'remen',
	      //component: remen
	      redirect: '/remen'
	    }
	  ],
	  mode: 'history'
	})
}


