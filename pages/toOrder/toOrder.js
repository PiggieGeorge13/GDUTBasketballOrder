// pages/toOrder/toOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  inputOrderNum(e){
    this.setData({
      ordernum: e.detail.value
    })
  },

  inputOrderName(e){
    this.setData({
      ordername: e.detail.value
    })
  },

  inputOrderTel(e){
    this.setData({
      ordertel: e.detail.value
    })
  },

  inputOrderTime(e){
    this.setData({
      ordertime: e.detail.value
    })
  },

  inputOrderPnm(e){
    this.setData({
      orderpnm: e.detail.value
    })
  },

  onSubmit(){
    var that = this
    var date = new Date()
    var day = date.getFullYear()+'年'+(date.getMonth() + 1)+'月'+date.getDate()+'日'
    wx.request({
      url: 'http://localhost:8080/school/createOrder',
      data:{
        ordernum: that.data.ordernum,
        nickname: that.data.ordername,
        phonenum: that.data.ordertel,
        appointmenttime: that.data.ordertime,
        appointmentnum: that.data.orderpnm,
        ordertime: day,
        moneynum: 0,
        orderstate: '待审核'
      },
      success(){
        wx.showModal({
          title: '恭喜你预约成功',
          content: '可以跟你的好朋友一起打球啦',
          showCancel: false 
        })
      },
      fail(){
        wx.showModal({
          title: '很抱歉预约失败',
          content: '再预约一次试一下',
          showCancel: false 
        })
      }
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