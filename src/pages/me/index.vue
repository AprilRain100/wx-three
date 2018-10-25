<template>
  <div>
    <div class="myRounter">
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
    }
  },
  computed: {

  },
  methods: {
    noCreate () {
    }
  }

}
</script>

<style>


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
