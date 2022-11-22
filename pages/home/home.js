// pages/home/home.js
import{request} from '../../util/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        looplist:[],
        datalist:[]
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
        this.renderSwiper()//轮播
        this.renderList()//列表
    },
    // 轮播数据
    renderSwiper(){
       request({
           url:"/recommends"
       }).then(res=>{
           console.log(res.data)
        this.setData({
            looplist:res.data
        })
       })
    },
    //列表数据
    renderList(){
        request({
            url:"/goods?_page=1&_limit=5"
        }).then(res=>{
            console.log(res.data)
            this.setData({
                datalist:res.data
            })
        })
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
        console.log("到底了")
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    handleAjax(){
        console.log("33")
     
    }
})