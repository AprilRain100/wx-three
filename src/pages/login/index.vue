<template>
  <div>
    <div>
      <img :src="showbg" alt="" class="loginBg">
    </div>
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">立即开启 <div class="triangle"></div></button>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  // import showbg from '../../../static/img/3dshowbg.png'

  export default {
    components: {},

    data () {
      return {
        showbg: 'https://demofile.xspace.gd.cn/wx3Dshow/ui/3dshowbg.png'
      }
    },
    methods: {
      ...mapActions([
        'loginMini'
      ]),
      getUserInfo () {
        // 调用登录接口
        wx.login({
          success: (res) => {
            const code = res.code
            // console.log('微信code===============>>', code);
            wx.getUserInfo({
              success: async (res) => {
                wx.switchTab({url: '../index/main'})
                const params = {
                  js_code: code,
                  nickname: res.userInfo.nickName,
                  sex: res.userInfo.gender,
                  city: res.userInfo.city,
                  province: res.userInfo.province,
                  headimgurl: res.userInfo.avatarUrl
                }
                this.$store.commit('USERINFO', res.userInfo)
                let data = await this.loginMini(params)
                if (data && !data.status) {
                  wx.switchTab({url: '../index/main'})
                }
              }
            })
          }
        })
      },
      onGotUserInfo (e) {
        if (e.target.userInfo) {
          this.getUserInfo() // 调用应用实例的方法获取全局数据
        } else {
          wx.showModal({
            title: '提示',
            content: '请先允许授权再进行操作！',
            showCancel: false,
            success: function (res) {
            }
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .loginBg {
    width: 100vw;
    height: 100vh;
    display: block;
  }
  button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 160rpx;
    left: -50%;
    right: -50%;
    width: 40%;
    background: #E7A21D;
    border-radius: 10rpx;
    color: #fff;
  }
  button:before {

  }
  .triangle {
    /*position: absolute;*/
    /*left: 80%;*/
    /*top: 50%;*/
    margin-left: 15rpx;
    width: 0;
    height: 0;
    border-top: 10rpx solid transparent;
    border-left: 20rpx solid #fff;
    border-bottom: 10rpx solid transparent;
  }
</style>
