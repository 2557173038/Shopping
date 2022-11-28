function checkAuth(callback){
    if(wx.getStorageSync('tel')){//判断本地是否有手机号
        //处理业务
        callback()
    }else{
        if(wx.getStorageSync('token')){
            wx.navigateTo({
              url: '/pahes/telform/telform',
            })
        }else{
            wx.navigateTo({
              url: '/pages/auth/auth',
            })
        }
    }
}

export default checkAuth