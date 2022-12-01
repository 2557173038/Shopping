// pages/shopcar/shopcar.js
import checkAuth from "../../util/auth"
import {request} from "../../util/request"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        slideButtons: [{
            text: '删除',
            type: 'warn',
        }],
        shopcarList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {},
    getShopcarList() {
        let {
            nickName
        } = wx.getStorageSync('token')
        let tel = wx.getStorageSync('tel')
        request({
            url: `/carts?_expand=good&username=${nickName}&tel=${tel}`
        }).then(res => {
            console.log(res.data)
            this.setData({
                shopcarList: res.data
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
        checkAuth(() => {
            this.getShopcarList()
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
    //删除功能
    slidButtonTap(evt) {
        console.log("删除成功",evt.currentTarget.dataset.id)
        var id=evt.currentTarget.dataset.id
        this.setData({
            shopcarList:this.data.shopcarList.filter(item=>item.id!==evt.currentTarget.dataset.id)//过滤，相等的就是删除的，不相等的就是没删除，留下来的就是没删除的
        })

        request({
            url:`/carts/${id}`,
            method:'delete'
        })
     
    },
    handleTap(evt) {
        // console.log(evt.currentTarget.dataset.item)
        var item = evt.currentTarget.dataset.item
        item.checked = !item.checked
        this.handleUpdate(item)
    },
    handleUpdate(item) {
        this.setData({
            shopcarList: this.data.shopcarList.map(data => {
                if (data.id === item.id) {
                    return item
                }
                return data
            })
        })
        request({
            url: `/carts/${item.id}`,
            method: 'PUT',
            data: {
                "username": item.username,
                "tel": item.tel,
                "goodId": item.goodId,
                "number": item.number,
                "checked": item.checked,
            }
        })
    },
    // 减处理函数
    handleminus(evt){
        var item = evt.currentTarget.dataset.item
        if(item.number===1){
            return
        }
        item.number--
        this.handleUpdate(item)

    },
    // 加处理函数
    handleadd(evt){
        var item = evt.currentTarget.dataset.item
        item.number++
        this.handleUpdate(item)

    },
    //全选按钮
    handlechange(evt){
        console.log(evt.detail.value)
        if(evt.detail.value==1){
            this.setData({
                shopcarList:this.data.shopcarList.map(item=>({
                    ...item,
                    checked:true
                }))
            })
        }else{
            this.setData({
                shopcarList:this.data.shopcarList.map(item=>({
                    ...item,
                    checked:false
                }))
            })
        }
    }
})