let solution = (arr,m) => {
    arr.sort(function(a,b){return a-b});
    let res = arr[m-1] - arr[0];
    for(let i=m;i<arr.length;i++){
        if(arr[i] - arr[i-m+1] < res){
            res = arr[i] - arr[i-m+1];
        }
    }
    return res;
}

console.log(solution([3,4,1,9,56,7,9,12],5))