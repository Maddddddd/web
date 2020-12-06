function shuZuJiangWei(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            return Array.prototype.concat.apply([], arr)
        }
    }
    return arr
}
console.log(shuZuJiangWei([[1,2] , 3,...[4,[5,6] , 7] ]))