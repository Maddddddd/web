function sort(arr){
    for (i=0;i<arr.length-1;i++){
        for (j=0;j<arr.length-i-1;j++){
            if (arr[j]>arr[j+1]){
                var temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr
}
    var re=sort([1,21,3,11,92,85,56,564]);
    console.log(re);