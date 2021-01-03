// pages/orderManage/orderDeatail.js
Page({
  data:{
    /*orderNum: 123456789,
    appointmentNum: 5,
    appointmentTime: '2020年12月25日  11:42',
    orderTime: '2020年11月25日  11:42',*/
    hasData: true,
    navTab: ["全部", "待处理", "待接待", "已完成", "客户处理"],
    moneyInfo: [,,,,,,,],
    /*nickName: 'C3-501',
    phoneNum: 'xxxxxxxxxx',*/
    url: 'http://60.205.161.252//Public/uploads/app/2016-12-15/58523b031fa7b.png',
    statusImage: ['../images/daijiedai.png'],
    statusText: ['待接待未付款'],
  },
  onLoad:function(options){
    var that = this
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
        title: '订单详情'
    })
    that.setData({
      orderNum: options.ordernum
    })
    wx.request({
      url: 'http://localhost:8080/school/getOrder',
      data:{
        ordernum: that.data.orderNum
      },
      success(res){
        that.setData({
          nickName : res.data[0].nickname,
          phoneNum : res.data[0].phonenum,
          appointmentTime : res.data[0].appointmenttime,
          appointmentNum : res.data[0].appointmentnum,
          orderTime : res.data[0].ordertime,
          moneyNum : res.data[0].moneynum,
          orderState : res.data[0].orderstate
        })
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})