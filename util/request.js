function request(params){
    //显示loding
    wx.showLoading({
        title: '加载中',
      })
 return new Promise((resolve,reject)=>{
     wx.request({
        ...params,//展开传过来的对象 一定要先展开后面的才能用
      url:'http://localhost:3000'+params.url,
       success:(res)=>{
           resolve(res)//成功
       },
       fail:(err)=>{
           reject(err)//失败
       },
       complete:()=>{//完成 不管是成功还是失败都完成
        // 隐藏loding
        wx.hideLoading()
       }
     })
 })
}
export {request}