Array.prototype.unique=function(){
  let set=new Set()
  this.forEach(item=>{
    set.add(item)
  })
  return [...set]
}