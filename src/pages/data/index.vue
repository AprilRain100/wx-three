<template>
  <div class="tab-slider">
    <div class="tab">
      <span v-for="(item, index) in items"  @click="toggle(index)"><a v-bind:class="{active: actived === index}">{{item.tab}}</a></span>
    </div>
    <div class="tab-content">
        <tab1 :datas="datas"></tab1>
    </div>
  </div>
</template>

<script>
  import tab1 from '../../components/tab1'
  export default {
    data () {
      return {
        actived: 0,
        items: [{
          'tab': '昨天'
        }, {
          'tab': '今天'
        }, {
          'tab': '一周'
        }, {
          'tab': '汇总'
        }],
        datas: {
          looks: 2,
          likes: 2,
          transpond: 2,
          tell: 2
        }
      }
    },
    components: {
      tab1
    },
    methods: {
      toggle (index) {
        this.actived = index
        switch (index) {
          case 0:
            this.datas.looks = 111
            break
          case 1:
            this.datas.looks = 222
            break
          case 2:
            this.datas.looks = 333
            break
          case 3:
            this.datas.looks = 444
            break
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
