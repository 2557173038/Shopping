// pages/detail/detail.js
import {request} from "../../util/request"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        info:null,
        current:0,
        commentList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // console.log("基于上个列表页面传来的id，根后端取当前页面的id对应的详细信息",options)
        wx.setNavigationBarTitle({
          title: options.name,
        })
        this.getDetailInfo(options.id)
        this.getDetailComments()
        },
    getDetailInfo(id){
        request({
            url:`/goods/${id}`
        }).then(res=>{
            console.log(res.data)
            this.setData({
                info:res.data
            })
        })
    },
    getDetailComments(){
        request({
        url:"/comments"

        }).then(res=>{
            console.log(res.data)
            this.setData({
                commentList:res.data
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
    handleImg(evt){
        // console.log(evt.currentTarget.dataset.url)
        // console.log(this.data.info.slides.map(item=>`http://localhost:3000${item}`))
        let url=evt.currentTarget.dataset.url
        console.log(url)
        wx.previewImage({
            current:url, // 当前显示图片的 http 链接
            urls:this.data.info.slides.map(item=>`http://localhost:3000${item}`)// 需要预览的图片 http 链接列表
          })
    },
    handleacitve(evt){
        // console.log(evt.currentTarget.dataset.index)
        this.setData({
            current:evt.currentTarget.dataset.index
        })
    }
})