<template>
  <div>
    <div class="container" v-if="myCover">
      <img class="bg" src="https://demofile.xspace.gd.cn/wx3Dshow/ui/bg.png" alt="">
      <div class="decText">
        <p>即刻开启-3D等你来show</p>
        <p>让商品展示更多元，精彩</p>
      </div>
      <div class="create">我要创建展厅 </div>
      <div class="noCreate" @click="noCreate">暂不创建</div>
    </div>

    <div class="myRounter" v-if="userInfo">
      <div class="userinfo">
        <img class="mebg" src="https://demofile.xspace.gd.cn/wx3Dshow/ui/mebg.png" alt="">
        <open-data class="infoImg" type="userAvatarUrl"></open-data>
        <open-data class="userinfo-nickname" type="userNickName"></open-data>
      </div>
      <div>
        <a href="/pages/data/main" class="about">- 我的数据 -</a>
        <a href="/pages/hall/main" class="collect">- 我的展厅 -</a>
      </div>
    </div>

  </div>
</template>

<script>
// Use Vuex
export default {
  data () {
    return {
      myCover:true,
      userInfo:false
    }
  },
  computed: {

  },
  methods:{
    noCreate(){
     this.myCover = false;
      this.userInfo = true;
    }
  }

}
</script>

<style>
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
  height: 810rpx;
}
.container .decText{
  position: absolute;
  top: 42%;
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


.myRounter{
  width: 100%;
  height: 100vh;
  background: #f6f4f3;
}


.userinfo {
  width: 100%;
  height: 372rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2rpx solid #7e7e7e;
}

.infoImg {
  width: 128rpx;
  height: 128rpx;
  margin: 50rpx 50rpx 20rpx 50rpx;
  overflow:hidden;
  border-radius: 50%;
  z-index: 22;
}
.userinfo-nickname{
  z-index: 22;
}
.mebg{
  width: 100%;
  height: 372rpx;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 11;
  background: #fff;
  filter: blur(6px);
}
.about {
  margin-top: 40rpx;
  padding: 30rpx 80rpx;
  text-align: center;
  font-size: 36rpx;
}
.collect{
  padding: 30rpx 80rpx;
  text-align: center;
  font-size: 36rpx;
}

</style>
