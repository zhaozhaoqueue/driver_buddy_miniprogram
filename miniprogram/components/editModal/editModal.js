// components/editModal/editModal.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: '',
    value: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    edit(){
      wx.showModal({
        title: this.data.title,
        editable: true,//显示输入框
        placeholderText: this.data.value,//显示输入框提示信息
        success: res => {
          if (res.confirm) { //点击了确认
            console.log(res.content)//用户输入的值
            this.setData({
              value: res.content
            })
            // 向父组件传值
            this.triggerEvent("update-value", res.content)
          } else {
            console.log('用户点击了取消')
          }
        }
      })
    }
  },

  lifetimes:{
    attached(){
      console.log("component attached")
      this.setData({
        title: this.properties.title,
        value: this.properties.value
      })
    }
  }
})