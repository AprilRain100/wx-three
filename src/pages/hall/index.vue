<template>
  <div>

    <div class="myHall">
      <div class="hallList">
        <img class="hallListImg" src="https://demofile.xspace.gd.cn/wx3Dshow/ui/tuo.png" alt="">
        <div class="hallListText">
          <p>进行中</p>
          <p><a href="/pages/details/main" style="display: flex;align-items: center"><span>去看看</span><img class="more" :src="more" alt=""></a></p>
        </div>
      </div>

      <div class="hallList">
        <img class="hallListImg" src="https://demofile.xspace.gd.cn/wx3Dshow/ui/tuo.png" alt="">
        <div class="hallListText">
          <p>进行中</p>
          <p><a href="/pages/details/main" style="display: flex;align-items: center"><span>去看看</span><img class="more" :src="more" alt=""></a></p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import more from '../../../static/img/more.png'
  export default {
    components: {},

    data () {
      return {
        more
      }
    },
    methods: {

    }
  }
</script>

<style>
  .myHall{
    width: 100%;
    height: 100vh;
    background: #f6f4f3;
  }
.hallList{
  width: 94%;
  height: 516rpx;
  background: #fff;
  margin: 20rpx 0;
  padding: 0 3%;
}
  .hallListImg{
    width: 100%;
    height: 394rpx;
    border-radius: 20rpx;
    margin-top:20rpx;
  }
  .hallListText{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 34rpx;
    font-size: 24rpx;
    align-items:center;
  }
  .hallListText p:first-child{
    padding: 5rpx 7rpx;
    background: #c79f62;
    color: #fff;
  }
  .hallListText p:last-child{
    color: #7E7E7E;
  }
  .hallListText span{
    margin-right: 10px;
  }
  .hallListText .more{
    width: 12rpx;
    height: 21rpx;
  }
</style>
