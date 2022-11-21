// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

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

    },
    handleGet(){
        wx.request({
          url: 'http://localhost:3000/posts?id=1',
          success:(res)=>{
              console.log(res.data)
          }
        })
    },
    handlePost(){
    wx.request({
      url: 'http://localhost:3000/posts',
      method:"POST",
      data:{
          username:"kerwin",
          password:"123"
      },
      success:(res)=>{
          console.log(res)
      }
    })
    },
    handlePut(){
        wx.request({
          url: 'http://localhost:3000/posts/2',
          method:"PUT",
          data:{
            username:"tiechui",
            password:'666'
          },
          success:(res)=>{
              console.log(res)
          }
        })
    },
    handleDel(){
        wx.request({
          url: 'http://localhost:3000/posts/3',
          method:"DELETE",
          data:{

          }
        })
    }
})