<template>
  <div>

    <div class="detailsPage">
      <img src="https://demofile.xspace.gd.cn/wx3Dshow/ui/tuo.png" alt="" class="detailImg"/>
      <div class="detailInfo">
        <div class="detailTitle">
          <img :src="bookicon" alt="" class="bookiconSize"/>
          <span>这都是些啥玩意儿啊</span>
        </div>
        <p><span>[年代]&nbsp;&nbsp;</span>古时候</p>
        <p><span>[文物现状]&nbsp;&nbsp;</span>卖了</p>
        <p><span>[简介]&nbsp;&nbsp;</span>
          一年来，以习近平同志为核心的党中央以“不畏浮云遮望眼”的宏阔视野、“乱云飞渡仍从容”的战略定力、
          “千磨万击还坚劲”的意志品质，总揽“四个伟大”，统筹推进“五位一体”总体布局，协调推进“四个全面”战略布局
          ，团结带领全党全军全国各族人民，坚定不移向着“两个一百年”奋斗目标奋力前行 浙江省宁波市人民检察院指控
          在文档流中，DIV的高度默认就是根据内容的高度自适应的。
          如果是想适配不同设备的窗口大小，可以设置百分比。或者通过position定位，然后设置top和bottom值。再或者利用css3的flexbox布局，
          设置父级的display为flex，方向为纵的，然后设置其flex：1；
        </p>
      </div>
    </div>

  </div>
</template>

<script>
  // import { mapActions } from 'vuex'
  import bookicon from '../../../static/img/bookicon.png'

  export default {
    components: {},

    data () {
      return {
        bookicon
      }
    },
    methods: {
    }
  }
</script>

<style>
.detailsPage{
  width: 100%;
  height: 100vh;
  background: #f6f4f3;
  overflow-y: scroll;
}
  .detailImg{
    width: 100%;
    height: 442rpx;
  }
  .detailInfo{
    padding: 60rpx 50rpx 0 50rpx;
    background:#f6f4f3;
    /*height:1000rpx;*/
  }
  .detailInfo p{
    height: 60rpx;
    line-height: 60rpx;
    font-size: 36rpx;
    color: #b78f51;
  }
  .detailInfo span{
    font-weight: 600;
  }
  .detailTitle{
    display: flex;
    /*justify-content: center;*/
    align-items: center;
    padding-bottom: 30rpx;
  }
  .detailTitle span{
    margin-left: 30rpx;
  }
  .bookiconSize{
    width: 54rpx;
    height: 40rpx;
  }
</style>
