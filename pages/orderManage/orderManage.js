//获取应用实例
var app = getApp()
Page({
  data: {
    totalIncome: 0.0,
    runningMoney: 0.0,
    publicWelfareMoney: 0.0,
    /*orderNum: 123456789,
    appointmentNum: 5,
    appointmentTime: '2017年12月25日  11:42',
    orderTime: '2017年11月25日  11:42',*/
    hasData: true,
    navTab: ["全部", "待处理", "待接待", "已完成", "用户处理"],
    moneyInfo: [,,,,,,,],
    /*nickName: 'C3-501',
    phoneNum: '18202801506',*/
    url: 'http://60.205.161.252//Public/uploads/app/2016-12-15/58523b031fa7b.png',
    statusImage: ['../images/daijiedai.png'],
    currentNavtab:1,
    statusText: ['待接待未付款'],
    startPoint:[0,0],
    paynum:['111111111','123456789','333'],
    paylist:[]
  },

  catchtouchstart:function(e){
    var that = this;
    that.setData({
      startPoint: [e.touches[0].clientX,e.touches[0].clientY]
    })
  },

  catchtouchend:function(e){
    var that = this;
    var currentNum = parseInt(this.data.currentNavtab);

    // that.endX = e.changedTouches[0].clientX;
    // that.endY = e.changedTouches[0].clientY;

    // if(that.endX  - that.startX > 10 && currentNum > 0){
    //   currentNum -= 1;
    // }

    // if(that.endX - that.startX < -10 && currentNum< this.data.navTab.length -1){
    //   currentNum=currentNum + 1;
    // }

    var endPoint = [e.changedTouches[0].clientX,e.changedTouches[0].clientY];
    var startPoint = that.data.startPoint
    if(endPoint[0] <= startPoint[0]) {
      if(Math.abs(endPoint[0] - startPoint[0]) >= Math.abs(endPoint[1] - startPoint[1]) && currentNum< this.data.navTab.length -1) {
         currentNum=currentNum + 1;  
      }
    }else {
      if(Math.abs(endPoint[0] - startPoint[0]) >= Math.abs(endPoint[1] - startPoint[1]) && currentNum > 0) {
          currentNum -= 1;
      }
    }

    this.setData({
      currentNavtab: currentNum
    });
  },

  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },


callEvent: function (e) {
  console.log(e)
  wx.makePhoneCall({
      phoneNumber: this.data.phoneNum
    })
},

goDeatailEvent: function () {
  let ordernum = this.data.paylist[0].ordernum
  wx.navigateTo({
      url: '../orderManage/orderDeatail/orderDeatail?ordernum='+ordernum,
    })
},

// 加载
  onLoad: function () {
    wx.setNavigationBarTitle({
        title: '订单管理'
    })
    var that = this
    let paylist = []
    //更新数据
      that.setData({
      })
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
    //console.log(that.data.paylist)
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
})
