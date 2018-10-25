<template>
  <div class="container">
    <img class="bg" src="https://demofile.xspace.gd.cn/wx3Dshow/ui/bg.png" alt="">
    <div class="decText">
      <p>即刻开启-3D等你来show</p>
      <p>让商品展示更多元，精彩</p>
    </div>
    <div class="create">我要创建展厅 </div>
    <a href="../me/main" class="noCreate" @click="noCreate">暂不创建</a>
  </div>
</template>
<script>
  export default {
    data () {}
  }
</script>
<style lang="scss">
  .container {
    position: relative;
    width: 100%;
    height:100vh;
    /*background: url("/static/img/huagongguan@1.5x.png") no-repeat center;*/
    background-size: 100% 100%;
  }
  .container .bg{
    width: 100%;
    position: relative;
    height: 100vh;
  }
  .container .decText{
    position: absolute;
    top: 59%;
    left: 0;
    right: 0;
    text-align: center;
  }
  .container .decText p:first-child{
    color: #333;
    font-weight: 600;
    font-size: 56rpx;
  }
  .container .decText p:last-child{
    color: #414141;
    font-weight: 500;
    font-size: 40rpx;
    margin-top: 10rpx;
  }


  .create{
    width: 90%;
    height: 88rpx;
    line-height: 88rpx;
    /*padding: 0 5%;*/
    margin: 0 5%;
    border: 0!important;
    background: #c29a5c;
    color: #fff;
    border-radius: 0;
    position: absolute;
    bottom: 100rpx;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }
  .noCreate{
    width: 90%;
    height: 88rpx;
    line-height: 88rpx;
    /*padding: 0 5%;*/
    margin: 0 5%;
    background: #fff;
    color: #7e7e7e;
    border-radius: 0;
    position: absolute;
    bottom: 20rpx;
    font-size: 18px;
    text-align: center;
  }

</style>
