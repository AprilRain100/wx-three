<template>
  <div class="tab-slider">
    <div class="tab">
      <span v-for="(item, index) in items"  @click="toggle(index)"><a v-bind:class="{active: actived == index}">{{item.tab}}</a></span>
    </div>
    <div class="tab-content">
        <tab1 v-if="tab0Control"></tab1>
        <tab2 v-if="tab1Control"></tab2>
        <tab3 v-if="tab2Control"></tab3>
        <tab4 v-if="tab3Control"></tab4>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import tab1 from '../../components/tab1'
  import tab2 from '../../components/tab2'
  import tab3 from '../../components/tab3'
  import tab4 from '../../components/tab4'


  export default {
    name: 'tabSlider',
    data (){
      return {
        actived: 0,
        tab0Control:true,
        tab1Control:false,
        tab2Control:false,
        tab3Control:false,
        items: [{
          'tab': '今天',
        },{
          'tab': '昨天',
        },{
          'tab': '一周',
        },{
          'tab': '汇总',
        }]
      }
    },
    components:{
      tab1,
      tab2,
      tab3,
      tab4
    },
    methods: {
      //v-if控制tab页面的显示与隐藏
      toggle(index){
        this.actived = index;
        if(this.actived === 0){
            this.tab0Control = true;
            this.tab1Control = false;
            this.tab2Control = false;
            this.tab3Control = false;
        }else if(this.actived === 1){
            this.tab0Control = false;
            this.tab1Control = true;
            this.tab2Control = false;
            this.tab3Control = false;
        }else if(this.actived === 2){
          this.tab0Control = false;
          this.tab1Control = false;
          this.tab2Control = true;
          this.tab3Control = false;
        }else if(this.actived === 3){
          this.tab0Control = false;
          this.tab1Control = false;
          this.tab2Control = false;
          this.tab3Control = true;
        }
      }

    }
  }
</script>

<style>
  /**{margin:0 auto;padding:0;font-family:"微软雅黑";}*/
  .clearboth::after{
    content:"";
    display:block;
    clear:both;
  }
  .tab-slider{
    width:100%;
    height:100vh;
    background: #f6f4f3;

  }
  .tab-slider .tab{
    display:flex;
    height:80rpx;
    line-height:80rpx;
    border-bottom: 2rpx solid #cbcbca;
  }
  .tab-slider .tab span{
    display:block;
    width:100%;
    text-align:center;
    cursor:default;
  }
  .tab-slider .tab span a{
    display: block;
    width: 40%;
    margin: 0 30%;
    height: 80rpx;
    font-weight: 500;
     box-sizing: border-box;
  }
  .tab-slider .tab .active {
    color: #B48A4A;
    border-bottom: 4rpx solid #B48A4A;
  }
  .tab-slider .tab-content{
    width:100%;
    overflow:hidden;
  }

</style>
