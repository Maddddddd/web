var arr = [
    {name:'ab',id:0},
    {name:'cde',id:18},
    {name:'opq',id:8}
];

function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}
console.log(arr.sort(compare('id')))