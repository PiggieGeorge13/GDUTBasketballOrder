// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper:[
      "/pages/images/LoginLog.png",
      "/pages/images/1609525868(1).png"
    ],
    /*selected: 0,
    color: "#888888",
    selectedColor: "#09BB07",
    list: [
      {
        "pagePath": "pages/order/order",
        "text": "预约场馆",
        "iconPath": "pages/images/qiuchang_gray.png",
        "selectedIconPath": "pages/images/qiuchang_selected.png"
      },
      {
        "pagePath": "pages/myself-custom/myself-custom",
        "text": "个人中心",
        "iconPath": "pages/images/people.png",
        "selectedIconPath": "pages/images/people_r.png"
      }
    ]*/
  },

 /* switchTab(e){
    const data = e.currentTarget.dataset
    const url = data.path
    wx.switchTab({
      url: url
    })
    this.setData({
      selected: data.index
    })
  },*/

  navigateToDetail(){
    wx.navigateTo({
      url: '/pages/gymDetail/gymDetail',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    /*if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }*/
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})