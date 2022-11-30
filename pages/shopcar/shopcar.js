// pages/shopcar/shopcar.js
import checkAuth from "../../util/auth"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        slideButtons:[{
            text:'删除',
            type:'warn',
            // extClass:'test',
            // src:'/page/weio/cell/icon_del.svg'
        }]
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
        checkAuth(()=>{
            console.log("显示购物车")
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

    },
    slidButtonTap(){
        console.log("删除成功")
    }
})