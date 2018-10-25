<template>
  <div>
    <div class="today">
      <div class="todayLook">
        <div class="lookTitle">被浏览次数</div>
        <div class="lookOther">
          <img class="lookImg" :src="look" alt="">
          <span>{{datas.looks}}</span>
        </div>
      </div>
      <div class="todayThumbs">
        <div class="thumbsTitle">被点赞次数</div>
        <div class="thumbsOther">
          <img class="thumbsImg" :src="thumbs" alt="">
          <span>{{datas.likes}}</span>
        </div>
      </div>
      <div class="todayRepeat">
        <div class="repeatTitle">被转发次数</div>
        <div class="repeatOther">
          <img class="repeatImg" :src="repeat" alt="">
          <span>{{datas.transpond}}</span>
        </div>
      </div>
      <div class="todayTel">
        <div class="telTitle">电话咨询次数</div>
        <div class="telOther">
          <img class="telImg" :src="tel" alt="">
          <span>{{datas.tell}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import look from '../../static/img/browset.png'
  import thumbs from '../../static/img/liket.png'
  import repeat from '../../static/img/forwards.png'
  import tel from '../../static/img/iPhonet.png'
  export default {
    name: 'tab1',
    data () {
      return {
        look,
        thumbs,
        repeat,
        tel
      }
    },
    props: {
      datas: {
        type: Object,
        default: {
          looks: 2,
          likes: 2,
          transpond: 2,
          tell: 2
        }
      }
    }
  }
</script>

<style>
.today{
  /*width: 100%;*/
  /*height: 100vh;*/
  padding: 40rpx;
  background: #f6f4f3;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #fff;
}
  /*111111*/
  .todayLook{
    width:330rpx;
    height: 230rpx;
    background: #e8b65b;
    border-radius: 10rpx;
  }
  .lookTitle{
    width: 100%;
    height: 62rpx;
    line-height: 62rpx;
    background: #EAC17E;
    font-size: 32rpx;
    text-align: center;
    border-radius: 10rpx;
  }
  .lookOther{
    width: 60%;
    padding: 0 20%;
    margin-top:50rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .lookImg{
    width: 46rpx;
    height: 36rpx;
  }

  /*2222*/
  .todayThumbs{
    width:330rpx;
    height: 230rpx;
    background: #80c490;
    border-radius: 10rpx;
  }
  .thumbsTitle{
    width: 100%;
    height: 62rpx;
    line-height: 62rpx;
    background: #8CCD99;
    font-size: 32rpx;
    text-align: center;
    border-radius: 10rpx;
  }
  .thumbsOther{
    width: 60%;
    padding: 0 20%;
    margin-top:50rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .thumbsImg{
    width: 41rpx;
    height: 36rpx;
  }

/*33333*/
  .todayRepeat{
    width:330rpx;
    height: 230rpx;
    background: #88bee1;
    margin-top: 10rpx;
    border-radius: 10rpx;
  }
  .repeatTitle{
    width: 100%;
    height: 62rpx;
    line-height: 62rpx;
    background: #96C7E7;
    font-size: 32rpx;
    text-align: center;
    border-radius: 10rpx;
  }
  .repeatOther{
    width: 60%;
    padding: 0 20%;
    margin-top:50rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .repeatImg{
    width: 46rpx;
    height: 46rpx;
  }

/*44444*/
  .todayTel{
    width:330rpx;
    height: 230rpx;
    background: #97a3e0;
    margin-top: 10rpx;
    border-radius: 10rpx;
  }
  .telTitle{
    width: 100%;
    height: 62rpx;
    line-height: 62rpx;
    background: #A9B4EF;
    font-size: 32rpx;
    text-align: center;
    border-radius: 10rpx;
  }
  .telOther{
    width: 60%;
    padding: 0 20%;
    margin-top:50rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .telImg{
    width: 38rpx;
    height: 44rpx;
  }
</style>
