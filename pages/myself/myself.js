//获取应用实例
var app = getApp()
Page({
  data: {
    myInfro:[],
    money:[],
    hasData:true,
    isHidden:true,
    hide:"hide",
    noHid:"noHid"
  },

  showMoney: function () {
    wx.navigateTo({
      url: '../myself/myMoney/myMoney'
    })
  },

  setEvent: function () {
    this.setData ({
      isHidden: !this.data.isHidden
    })
    console.log(this.data.isHidden)
  },

  callKeHu: function () {
    wx.makePhoneCall({
      phoneNumber: 'xxxxxxxxxx'
    })
  },

  modifyPassword: function () {
    this.setData ({
      isHidden: !this.data.isHidden
    }),
    wx.navigateTo({
      url: '../myself/modifyPassword/modifyPassword'
    })
  },

  directionsForUse: function () {
    this.setData ({
      isHidden: !this.data.isHidden
    }),
    wx.navigateTo({
      url: '../myself/directionsForUse/directionsForUse'
    })
  },

  feedBack: function () {
    this.setData ({
      isHidden: !this.data.isHidden
    }),
    wx.navigateTo({
      url: '../myself/feedBack/feedBack'
    })
  },

   loginOut: function () {
    this.setData ({
      isHidden: !this.data.isHidden
    })
    // wx.navigateTo({
    //   url: '../login/login'
    // })
    // wx.navigateBack({
    //   delta: 1
    // })
    wx.redirectTo({
      url: '../login/login'
    })
  },

  

// 加载
  onLoad: function () {
    wx.setNavigationBarTitle({
        title: ' '
    })
    var that = this
    //更新数据
      that.setData({
        money:[
          {"url":"../images/wallet.png","title":"我的钱包","content":"501.00元","indicator":"../images/next.png"},
        ],
         myInfro:[
          {"url":"../images/shop.png","title":"场馆名称","content":"大操场"},
          {"url":"../images/zuoji.png","title":"联系电话1","content":"xxxxxxxx"},
          {"url":"../images/phone.png","title":"联系电话2","content":"xxxxxxxx"},
          {"url":"../images/address.png","title":"场馆地址","content":"广工龙洞校区大操场"},
          {"url":"../images/bangding.png","title":"绑定账户","content":"501银行 ************1234"}
        ]
      })
  }
})