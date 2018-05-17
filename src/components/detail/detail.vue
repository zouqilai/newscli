<template>
    <div class="op-wx-new-detail">
        <header class="op-wx-new-dt-header">
            <h1 class="op-wx-new-dt-title">亚马逊做了一间肥宅快乐屋的样板房</h1>
            <section>
                <h3>
                    <div class="op-wx-new-dt-des">
                        <span>凤凰科技</span>
                        <span>05-11 14:21</span>
                    </div>
                </h3>
            </section>
        </header>
        <div class="op-wx-new-dt-content">
            {{content}}
            <!-- <img src="https://f12.baidu.com/it/u=3792258311,276029190&amp;fm=173&amp;app=25&amp;f=JPEG?w=640&amp;h=430&amp;s=92AA65A6C096A5CA5632CD00030070DB&amp;access=215967316" data-index="0" />
            <p>意识克隆体作为管家，图片来源：豆瓣 驯服并劳役虚拟自我（即自我意识的克隆体），只为让真实的自我生活得舒心，是多么瘆人的科技畅想。当然啦，亚马逊与 Lennar 合作推出的智能家居样板房还没这么暴政，主要是目前的科技还是克隆不了意识。 亚马逊的智能家居到底“智能”在哪里？根据亚马逊官方说明，智能家居生活主要是 Alexa、Prime 和电商平台的共同协作提供：</p>
            <p>Alexa ：通过语音控制电灯、电视、调节恒温器，查看前门的来访者，查天气，并根据交通状况提供最新通勤时间的信息。</p> -->
        </div>
    </div>
</template>
<script>
import {getDetail} from '../../service/getData';
export default {
    data() {
        return {
            fid:{type:Number},
            id:{type:Number},
            content:{type:Object}
        };
    },
    created(){
    	//this.$emit('showDetai',false);//向父级传递数据
        //console.log(this.$route);
        this.fid = this.$route.params.fid;
        this.id = this.$route.params.id;
        const _this = this;
        const response = getDetail(this.fid,this.id);
        response.then(res=>{
            if(!res.errno){
                _this.content = res.data.content
            }
        });
    },
    components: {
        
    }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.op-wx-new-detail
    margin:0.3rem .1rem .1rem .1rem
    .op-wx-new-dt-header
        padding-bottom: .07rem
        position: relative
        .op-wx-new-dt-title
            font-size: .4rem
            line-height: .5rem
        section
            justify-content: space-between
            margin: 22px 0 0
            display:flex
            h3
                box-orient: horizontal
                flex: 1
                margin: 0
                .op-wx-new-dt-des
                    display: block
                    height: 100%
                    color: #999
                    font-weight: 400
                    font-size: .12rem
    .op-wx-new-dt-content
        font-size:.32rem
        line-height:.55rem
        margin-top:.2rem
        img
            width:100%
        p
            margin-top:.15rem
</style>
