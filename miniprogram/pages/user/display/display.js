// pages/user/display/display.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      id: 'xyz123',
      nick_name: 'hahaa',
      avatar_url: '../../../assets/avatar_1.jpeg',
      phone_number: '15891741108',
      address: '金地西沣公元二期',
      register_status: 'pending'
    }
  },

  chooseAvatar(event){
    const {avatarUrl} = event.detail
    this.setData({
      "user.avatar_url": avatarUrl
    })
    /* TODO: 将 url 保存到后端 */
  },

  updateNickName(event){
    this.setData({
      "user.nick_name": event.detail
    })
  },
  updatePhoneNum(event){
    this.setData({
      "user.phone_number": event.detail
    })
  },

  updateAddress(event){
    this.setData({
      "user.address": event.detail
    })
  },

  updateUserInfo(){
    wx.navigateTo({
      url: `/pages/user/edit/edit?user_id=${this.data.user.id}`,
    })
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
      active: 3
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