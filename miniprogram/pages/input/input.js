// pages/input/input.js
const db = wx.cloud.database()
Page({
  data: {
    items: [
      { name: 'RW', value: '减肥' },
      { name: 'BM', value: '增肌', checked: 'true' },
      
    ],
    radioStr: '增肌',
    height:null,
    age:null,
    weight:null
  },
  radioChange: function (e) {
    var str = null;
    for (var value of this.data.items) {
      if (value.name === e.detail.value) {
        str = value.value;
        break;
      }
    }
    this.setData({ radioStr: str });
  },
  inputheight:function(e){
    var value=e.detail.value
    this.setData({height:value})
  },
  inputweight(e){
    var value = e.detail.value
    this.setData({weight:value})
  },
  inputage(e){
    var value = e.detail.value
    this.setData({age:value})
  },
  btnsub(res){
    console.log(res)
    //var {name,weight,hight,gender,age,job,introduction} = res.detail.value;
    //console.log(title,author,content)
    var value = res.detail.value;
    db.collection("user").add({
      data:value
    }).then(res=>{
      console.log(res)
    })
  },
})