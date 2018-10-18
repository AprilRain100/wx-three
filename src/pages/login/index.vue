<template>
  <div>
    <button open-type='getUserInfo' lang='zh_CN' @getuserinfo='onGotUserInfo'>立即开启 <div class='triangle'></div></button>
  </div>

</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    components: {},

    data () {
      return {}
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

<style>
  .log-list {
    display: flex;
    flex-direction: column;
    padding: 40rpx;
  }

  .log-item {
    margin: 10rpx;
  }
</style>
