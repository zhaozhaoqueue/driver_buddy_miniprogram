// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    partner_list: [
      {
        id: '1',
        name: '石教练',
        avatar_url: '../../assets/avatar_1.jpeg',
        experienced_hours: '360',
        address: 'xxx 路 xxx 小区',
        license_type: 'C1',
        date_list: [
          {
            date: '6-1',
            is_available: true
          },
          {
            date: '6-2',
            is_available: true
          },
          {
            date: '6-3',
            is_available: true
          },
          {
            date: '6-4',
            is_available: false
          },
          {
            date: '6-5',
            is_available: true
          },
          {
            date: '6-6',
            is_available: false
          },
          {
            date: '6-7',
            is_available: true
          }
        ],
      },
      {
        id: '1',
        name: '王教练',
        avatar_url: '../../assets/logo.png',
        experienced_hours: '200',
        address: 'xxx 路 xxx 小区',
        license_type: 'C1',
        date_list: [
          {
            date: '6-1',
            is_available: true
          },
          {
            date: '6-2',
            is_available: false
          },
          {
            date: '6-3',
            is_available: true
          },
          {
            date: '6-4',
            is_available: false
          },
          {
            date: '6-5',
            is_available: true
          },
          {
            date: '6-6',
            is_available: false
          },
          {
            date: '6-7',
            is_available: true
          }
        ],
      }
    ]
  },

  schedule_training(e) {
    if (e.currentTarget.dataset.available){
      const {id, date} = e.currentTarget.dataset
      wx.navigateTo({
        url: `/pages/schedule/book/book?partner_id=${id}&date=${date}`
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().setData({
      active: 0
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})