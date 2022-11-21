// pages/home/home.js
import{request} from '../../util/request'
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
        request({
        url:"/posts"
        }).then(res=>{
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },
    handlePost(){
    request({
        url:"/posts",
      method:"POST",
      data:{
          username:"kerwin",
          password:"123"
      }
    }).then(res=>{
        console.log(res)
    })
    },
    handlePut(){
        request({
          url: '/posts/2',
          method:"PUT",
          data:{
            username:"tiecui",
            password:'666'
          }
        }).then(res=>{
            console.log(res)
        })
    },
    handleDel(){
        request({
          url: '/posts/6',
          method:"DELETE",
        })
    }
})