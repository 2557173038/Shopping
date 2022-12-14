// pages/seacrhlist/searchlist.js
import {request} from '../../util/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsList:[]
    },
    priceOrder:true,
    commentOrder:true,

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options)
        wx.setNavigationBarTitle({
          title: options.name,
        })
        this.getList(options.id)
    },
    getList(id){
        request({
            url:`/categories/${id}?_embed=goods`//跨连整合
        }).then(res=>{
            console.log(res.data.goods)
        this.setData({
            goodsList:res.data.goods
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
    handleTap(e){
        wx.navigateTo({
            url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}&name=${e.currentTarget.dataset.name}`,
          })
    },
    handlePrice(){
        this.priceOrder=!this.priceOrder
        this.setData({
            //排序
            goodsList:this.priceOrder?this.data.goodsList.sort((item1,item2)=>item1.price-item2.price):this.data.goodsList.sort((item1,item2)=>item2.price-item1.price)
        })
    },
    handleComment(){
        this.commentOrder=!this.commentOrder
        this.setData({
            //排序
            goodsList:this.commentOrder?this.data.goodsList.sort((item1,item2)=>parseInt(item1.goodcomment)-parseInt(item2.goodcomment)):this.data.goodsList.sort((item1,item2)=>parseInt(item2.goodcomment)-parseInt(item1.goodcomment))
        })
    }
})