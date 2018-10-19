<template>
  <div class="container">
    <scroll-view style="height: 100%" scroll-y="true" upper-threshold="0" @scrolltoupper="scrolltoupper"  @scrolltolower="scrolltolower" @scroll="scroll">
    <div class="list">
        <div class="card" v-for="(item, index) in 5" :key="index">
          <img class="bigimg" :src="tuo" alt=""  @click="goDetail(item)">
          <h5>艺术与灵感融合的全屋定制</h5>
          <div class="tools">
            <div>
              <img :src="likeFalg ? likeselected : like" alt="" @click="tapLike('like')">
              <span>{{likeNum}}</span>
            </div>
            <div>
              <img :src="browsetFalg ? browset : browse" alt="" @click="tapLike('browse')">
              <span>3456</span>
            </div>
            <div>
              <button open-type="share" class="sharebtn">
                <img :src="forward" alt="" @click="tapLike('forward')">
                <span>123</span>
              </button>
            </div>
          </div>
        </div>
        <div class="baseline">
          {{'———— 我是有底线的(>﹏<) ————'}}
        </div>
    </div>
    </scroll-view>
  </div>
</template>

<script>
import tuo from '../../../static/img/tuo.png'
import tuw from '../../../static/img/tuw.png'
import like from '../../../static/img/like.png'
import likeselected from '../../../static/img/likeselected.png'
import browse from '../../../static/img/browse.png'
import browset from '../../../static/img/browset.png'
import forward from '../../../static/img/forward.png'
import forwards from '../../../static/img/forwards.png'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      tuo,
      tuw,
      like,
      likeselected,
      likeNum: 3344,
      likeFalg: false,
      browse,
      browset,
      browsetFalg: false,
      forward,
      forwards,
      cardList: [
        {}
      ]
    }
  },

  components: {
  },

  methods: {
    scrolltoupper () {
      console.log('自定义刷')
    },
    scrolltolower () {
      console.log('自定义加载')
    },
    scroll (e) {
    },
    goDetail (item) {
      wx.navigateTo({
        url: '../showDetails/main'
      })
    },
    tapLike (type) {
      if (type === 'like') {
        this.likeFalg = !this.likeFalg
        if (this.likeFalg) {
          this.likeNum++
        } else {
          this.likeNum--
        }
      } else if (type === 'browse') {
        // this.browsetFalg = !this.browsetFalg
      }
    }
  },
  onPullDownRefresh () {
    console.log('下拉刷新')
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 2000)
  },
  onReachBottom () {
    console.log('上拉加载更多')
  }
}
</script>

<style lang="scss" scoped>
  .container {
    position: fixed;
    display:flex;
    flex-direction:column;
    align-items:center;/*垂直居中*/
    justify-content: center;/*水平居中*/
    /*position: absolute;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    width: 100vw;
    height: 100%;
    background: #F7F5F4;
    .list {
      height: 100%;
      padding: 20rpx 40rpx 0 40rpx;
      .card {
        margin-bottom: 40rpx;
        border-radius: 15rpx;
        box-shadow: 0 3px 5rpx -1rpx rgba(50, 50, 50, 0.47);
        background: #fff;
        h5 {
          margin: 0 50rpx;
          padding: 20rpx 0;
          font-size: 32rpx;
          color: #333;
          font-weight: 1000;
          border-bottom: 1rpx solid #EAEAEA;
        }
        .bigimg {
          width: 100%;
        }
        .tools {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin: 0 50rpx;
          padding: 20rpx 0;
          div {
            display: flex;
            align-items: center;
            margin-right: 70rpx;
            img {
              width: 38rpx;
              height: 38rpx;
            }
            span {
              margin-left: 17rpx;
              font-size: 28rpx;
              color: #7E7E7E;
            }
          }
          .sharebtn {
            display: flex;
            align-items: center;
            background: none;
          }
          .sharebtn:after {
            border: none;
          }

        }
      }
      .baseline {
        margin: 10rpx auto;
        text-align: center;
        font-size: 24rpx;
        color: #C6C6C6;
      }
    }
  }
</style>
