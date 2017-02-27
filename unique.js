// 数组去重

function isExist(arr,n){
  if(arr.indexOf){
    return arr.indexOf(n)==-1 ? false : true
  }else{
    for(var i=0,len=arr.length;i<len;i++){
      if(arr[i]==n) return true
    }
    return false
  }
}

Array.prototype.unique=function(){
  var arr=this
  var newArr=[]
  for(var i=0,len=arr.length;i<len;i++){
    if(!isExist(newArr,arr[i])) newArr.push(arr[i])
  }
  return newArr
}
