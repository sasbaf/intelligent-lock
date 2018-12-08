Page({
  send: function () {
    this.data.a = ((this.data.a == "ON") ? "OFF" : "ON")
    this.setData({
      a: this.data.a
    })
    wx.showToast({
      title: this.data.a,
      duration: 1000
    })
    this.sendRequset(this.makeObj(this.data.a, ""));
  },
  sendRequset: function (obj) {
    wx.request(obj);
  },
  makeObj: function () {
    var obj = {
      url: 'https://api.heclouds.com/devices/502981115/datapoints?type=3',
      header: {
        "content-type": 'application/json',
        "api-key": 'xlwb8GOzpWV6RaRw=6katY7HgzE='
      },
      method: "POST",
      data: {
        "a": (this.data.a == "ON") ? 1 : 2
      },
    }
    return obj;
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
