// pages/myOrder/myOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paynum:['111111111','123456789','333'],
    paylist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的预约',
    })
    var that = this
    let paylist = []
    for(var i = 0; i < that.data.paynum.length; i++){
      wx.request({
        url: 'http://localhost:8080/school/getOrder',
        data:{
          ordernum: that.data.paynum[i]
        },
        success(res){
          let item = {}
          item.ordernum = res.data[0].ordernum
          item.nickname = res.data[0].nickname
          item.phonenum = res.data[0].phonenum
          item.appointmenttime = res.data[0].appointmenttime
          item.appointmentnum = res.data[0].appointmentnum
          item.ordertime = res.data[0].ordertime
          item.moneynum = res.data[0].moneynum
          item.orderstate = res.data[0].orderstate
          paylist.push(item)
        }
      })
    }
    setTimeout(() => {
      that.setData({
        paylist: paylist,
      })
    },1000)
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