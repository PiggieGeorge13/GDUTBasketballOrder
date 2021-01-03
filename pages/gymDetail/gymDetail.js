// pages/gymDetail/gymDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper:[
      "/pages/images/longdong-gym.jpg",
      "/pages/images/1609525868(1).png",
      "/pages/images/LoginLog.png"
    ],
    content: "广东工业大学龙洞校区历史悠久，环境优美，篮球氛围优异，在这里曾经诞生过如易建联、朱芳雨、王仕鹏、杜锋、周鹏等多名知名国家篮球运动员，广工校男子篮球队也在各项比赛中多次获得优秀成绩，在省内排名靠前。每天都有许多学生以及其他篮球爱好者前来广工大操场挥洒汗水，激扬篮球热情。广工大操场免费对外开放，球场内设施齐全，欢迎各位前来运动。注意，各位篮球爱好者需要自备篮球进场，可随意组队约球。"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '广工大操场',
    })
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