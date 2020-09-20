var data;
const db = wx.cloud.database()
var scrollLeft;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/运动语录/健身吧.png',
      '/images/运动语录/超越自我.jpeg',
      '/images/运动语录/世界.jpg',
      '/images/运动语录/最好.jpg',
      '/images/运动语录/success.jpg',
      '/images/运动语录/run.jpeg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 800,
  },
  btnsub(res){
    console.log(res)
    //var {name,weight,hight,gender,age,job,introduction} = res.detail.value;
    //console.log(title,author,content)
    var value = res.detail.value;
    db.collection("user").add({
      data:value
    }).then(res=>{
      console.log(res)
    })
  },

  f4(){
    wx.navigateTo({
      url: '/pages/input/input',
    })
  },
  f1(){
    wx.navigateTo({
      url: '/pages/youyang/youyang',
    })
  },
  f2(){
    wx.navigateTo({
      url: '/pages/wuyang/wuyang',
    })
  },
  f3(){
    wx.navigateTo({
      url: '/pages/qushen/qushen',
    })
  },
  tiaosheng(){
    wx.navigateTo({
      url: '/pages/tiaosheng/tiaosheng',
    })
  },
  yangwo(){
    wx.navigateTo({
      url: '/pages/yangwo/yangwo',
    })
  },
  manzou(){
    wx.navigateTo({
      url: '/pages/manzou/manzou',
    })
  },
  yaling(){
    wx.navigateTo({
      url: '/pages/yaling/yaling',
    })
  },
  run(){
   wx.navigateTo({
     url: '/pages/run/run',
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