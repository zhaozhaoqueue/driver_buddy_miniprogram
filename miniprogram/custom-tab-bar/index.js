// custom-tab-bar/index.js
Component({
  data: {
    active: null,
    item_list:[
      {
        icon: 'home-o',
        text: '首页',
        url: '/pages/home/home'
      },
      {
        icon: 'orders-o',
        text: '预约管理',
        url: '/pages/schedule/list/list'
      },
      {
        icon: 'logistics',
        text: '车辆管理',
        url: '/pages/vehiche/list/list'
      },
      {
        icon: 'user-circle-o',
        text: '个人中心',
        url: '/pages/user/display/display'
      },
    ]
  },
  

  methods: {
    onChange(event) {
      this.setData({ active: event.detail });
      wx.switchTab({
        url: this.data.item_list[event.detail].url,
      });
    },
  
  }
});