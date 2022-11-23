// pages/home/home.js
import{request} from '../../util/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        looplist:[],
        datalist:[],
        token:''
    },

    current:1,
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
        //    console.log(res.data)
        this.setData({
            looplist:res.data
        })
       })
    },
    //列表数据
    renderList(){
        request({
            url:`/goods?_page=${this.current}&_limit=5`
        }).then(res=>{
            // console.log(res.data)
            // console.log(res.header["X-Total-Count"])
            this.setData({
                datalist:[...this.data.datalist,...res.data],
                token:res.header["X-Total-Count"]
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
        setTimeout(()=>{
            wx.stopPullDownRefresh()//停止下拉刷新
        },1000)
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        // console.log(this.data.datalist.length)
        if(this.data.datalist.length==this.data.token)
        {
            return 
        }
        this.current++
        this.renderList()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    handleAjax(){
        console.log("33")
    },
    handleEvent(){
      console.log("搜索触发")
    },
    handleChangePage(evt){
        // wx.redirectTo 跳转页面并关闭当前页面
        // wx.switchTab 跳转底下导航栏路径
    //    console.log(evt.currentTarget.dataset.id)
    let id=evt.currentTarget.dataset.id
    let name=evt.currentTarget.dataset.name
        wx.navigateTo({// 跳转页面 不关闭当前页面
          url: `/pages/detail/detail?id=${id}&name=${name}`,
        })
    }
})