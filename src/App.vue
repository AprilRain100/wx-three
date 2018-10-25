<script>
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions([
        'loginMini'
      ]),
      getUserInfo () {
        // 调用登录接口
        wx.login({
          success: (res) => {
            const code = res.code
            // console.log('微信code===============>>', code)
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
                console.log(params)
                // this.$store.commit('USERINFO', res.userInfo)
                // await this.loginMini(params)
                // wx.switchTab({url: '../index/main'})
              }
            })
          }
        })
      }
    },
    onLaunch (options) {
      // console.log('onLaunch', options)
      wx.getSetting({
        success: res => {
          if (res && res.authSetting['scope.userInfo']) {
            console.log('授权')
            this.getUserInfo(true)
          } else {
            wx.redirectTo({url: '../login/main'})
            console.log('没有授权')
          }
        }
      })
    }
  }
</script>

<style>
.container {
  height: 100%;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
