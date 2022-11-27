// pages/category/category.js
import {request} from "../../util/request"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        vtabs:[],
        activeTab:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        request({
            url:`/categories/?_embed=goods`
        }).then(res=>{
            console.log(res.data)
            this.setData({
                vtabs:res.data
            })
        })
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
    handleTo(e){
        console.log(e.currentTarget.dataset.id)
        let id=e.currentTarget.dataset.id
        let name=e.currentTarget.dataset.name
        wx.navigateTo({// 跳转页面 不关闭当前页面
            url: `/pages/detail/detail?id=${id}&name=${name}`,
          })
    }
})
