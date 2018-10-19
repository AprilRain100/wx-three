<template>
  <div class="container" :class="{'hiddenScroll': isShowVideo}" id="box">
    <div class="card-top">
      <h1>正在展览</h1>
      <div class="big-card">
        <img class="big-img" :src="tuo" alt="">
        <div class="title">
          <span>艺术与灵感融合的全屋定制</span>
        </div>
        <button open-type="share" class="share-icon">
          <!--<img class="share-icon" :src="forwardt" alt="">-->
        </button>
      </div>
      <h5>联系信息</h5>
    </div>
    <div class="contact-message">
      <div class="phone" @click="makePhoneCall" :data-phone="phone">
        手机 <span>{{phone}}</span>
        <img :src="iPhone" alt="">
      </div>
      <div class="contact">
        联系人 <span>91李先生</span>
      </div>
      <div class="company">
        公司 <span>海兰察科技有限公司</span>
      </div>
      <div class="address">
        地址 <span>深圳市南山区学府路百度国际大夏东塔楼27偻</span>
      </div>
    </div>
    <h5 class="generalize-title">
      主推产品
    </h5>
    <div class="product-box">
      <h1>旅行白瓷方口瓶</h1>
      <div class="circle">
        <span v-for="(item, index) in imgUrls" :key="index" :class="{'current': index === currentDefault}">
        </span>
      </div>
      <swiper :indicator-dots="indicatorDots"
              :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" :previous-margin="'30rpx'"
              :next-margin="'30rpx'" :current="currentDefault" @change="change">
        <block v-for="item in imgUrls" :key="index">
          <swiper-item :item-id="item" @click="showBigPic(item)">
            <image :src="item" class="slide-image" width="355" height="150"/>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <h5 class="generalize-title">
      企业介绍
    </h5>
    <div class="videos">
      <!--
      :poster="'http://pic1.win4000.com/wallpaper/6/5243c949aadb6.jpg'"
      -->
      <video src="https://demofile.xspace.gd.cn/land/stadium/0001/afdaf502-0269-4f63-8bb9-caae55a49a9a.mp4"
      :initial-time="11" :show-center-play-btn="false"
             :show-fullscreen-btn="false" :show-play-btn="false" :enable-progress-gesturf="false" :controls="false">
        <cover-view class="play" @click="plays">
          <cover-image  class="img" src="https://demofile.xspace.gd.cn/wx3Dshow/ui/play.png" />
        </cover-view>
      </video>
    </div>
    <div class="playing" v-if="isPlay" @click="isPlay=false" >
      <div class="playingcover" ></div>
      <video src="https://demofile.xspace.gd.cn/land/stadium/0001/afdaf502-0269-4f63-8bb9-caae55a49a9a.mp4" controls :autoplay="true"></video>
    </div>
  </div>
</template>
<script>
  // import tuo from '../../../static/img/tuo.png'
  import forwardt from '../../../static/img/forwardt.png'
  import iPhone from '../../../static/img/iPhone.png'
  import play from '../../../static/img/play.png'

  export default {
    data () {
      return {
        tuo: 'https://demofile.xspace.gd.cn/wx3Dshow/ui/tuo.png',
        forwardt,
        iPhone,
        play,
        imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: false, // 是否显示面板指示点
        autoplay: true,
        circular: true,
        interval: 3000,
        duration: 1000,
        currentDefault: 0,
        isPlay: false,
        isShowVideo: false,
        phone: 18218172009
      }
    },
    computed: {
      current: () => {
        return this.currentDefault
      }
    },
    watch: {
      currentDefault (val) {
        // console.log(val, 1)
      },
      isPlay (val) {
        const query = wx.createSelectorQuery()
        console.log(val)
        this.isShowVideo = val
        if (!val) {
          query.select('#box').boundingClientRect(rect => {
            // 使页面滚动到底部
            console.log(rect)
            wx.pageScrollTo({
              scrollTop: rect.bottom,
              duration: 0
            })
          }).exec()
        }
      }
    },
    methods: {
      change (e) {
        // console.log(e)
        this.currentDefault = e.target.current
      },
      plays (e) {
        this.isPlay = true
      },
      makePhoneCall (e) {
        console.log(e)
        wx.makePhoneCall({
          phoneNumber: '18218172009'
        })
      },
      showBigPic (item) {
        wx.previewImage({
          urls: [item]
        })
      }
    },
    onShareAppMessage () {
      return {
        title: '快来玩吧'
        // imageUrl: ,
        // path: '/pages/gameLoading/main'
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/icon";
  .hiddenScroll {
    position:fixed !important;
    height:100% !important;
    overflow:hidden!important;
  }
  .container{
    /*position: fixed;*/
    display:flex;
    flex-direction:column;
    /*align-items:center;!*垂直居中*!*/
    /*justify-content: center;!*水平居中*!*/
    width: 100vw;
    height: 100%;
    background: #F7F5F4;
    .card-top {
      padding: 30rpx 40rpx 0;
      h1 {
        margin-bottom: 16rpx;
        font-size: 60rpx;
        color: #333;
      }
      .big-card {
        position: relative;
        .big-img {
          width: 100%;
          height: 474rpx;
        }
        .title {
          position: absolute;
          left: 20rpx;
          top: 17rpx;
          padding: 0 10rpx;
          width: 395rpx;
          /*height: 58rpx;*/
          text-align: center;
          line-height: 58rpx;
          /*opacity: 0.35;*/
          /*background: #000;*/
          background: rgba(0,0,0,0.35);
          border-radius: 50rpx 0 50rpx;
          span {
            font-size: 28rpx;
            color: #D1AE7A;
          }
        }
        .share-icon {
          position: absolute;
          right: 20rpx;
          top: 20rpx;
          width: 72rpx;
          height: 72rpx;
          background: url($forwardt) no-repeat center;
          background-size: 72rpx;
        }
      }
      h5 {
        margin: 15rpx 0 16rpx;
        font-size: 30rpx;
        color: #AEAEAE;
      }
    }
    .contact-message {
      padding: 0 30rpx;
      background: #fff;
      box-shadow: 0 2px 10rpx -1rpx rgba(50, 50, 50, 0.47);
      div {
        position: relative;
        padding: 20rpx 0;
        min-height: 45rpx;
        font-size: 32rpx;
        color: #333;
        border-bottom: 1rpx solid #eaeaea;
        span {
          position: absolute;
          left: 130rpx;
          font-size: 32rpx;
          color: #7E7E7E;
        }
      }
      div:last-child {
        height: 80rpx;
        border: none;
      }
      .phone {
        img {
          position: absolute;
          right: 10rpx;
          width: 33rpx;
          height: 44rpx;
        }
      }
    }
    .generalize-title {
      margin: 30rpx 0 16rpx 40rpx;
      font-size: 30rpx;
      color: #AEAEAE;
    }
    .product-box {
      padding-bottom: 20rpx;
      background: #fff;
      box-shadow: 0 2px 10rpx -1rpx rgba(50, 50, 50, 0.47);
      h1 {
        padding-top: 30rpx;
        text-align: center;
        font-size: 36rpx;
        color: #333;
        font-weight: bold;
      }
      .circle {
        text-align: center;
        span {
          margin: 0 5rpx;
          display: inline-block;
          width: 14rpx;
          height: 14rpx;
          background: #EAEAEA;
          border-radius: 50%;
        }
        .current {
          background: #AEAEAE;
        }
      }
      ._swiper {
        height: 395rpx;
        ._swiper-item {
          /*margin: 0 10rpx;*/
        }
        ._image  {
          margin: 0 10rpx;
          width: 100%;
        }
      }
    }
    .videos {
      position: relative;
      padding-bottom: 50rpx;
      video {
        width: 100vw;
        height: 419rpx;
      }
      .play {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 99vw;
        height: 410rpx;
        z-index: 999;
        .img {
          width: 39rpx;
          height: 49rpx;
          z-index: 9999;
        }

      }
    }
    .playing {
      position: fixed;
      overflow: auto;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      display: flex;
      outline: 0;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      transform: translateZ(1px);
      flex-direction: column;
      .playingcover {
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:rgba(0,0,0,.9);
        z-index:99;
        transition:all .2s ease-in-out;
      }
      video {
        width: 96vw;
        z-index: 999;

      }
    }
  }

</style>
