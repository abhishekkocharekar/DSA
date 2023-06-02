let merge = (arr1,arr2) => {
    let res = [];
    let i=0,j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] > arr2[j]){
            res.push(arr2[j]);
            j++;
        } else {
            res.push(arr1[i]);
            i++;
        }
    }
    if(i<arr1.length){
        while(i<arr1.length){
            res.push(arr1[i]);
            i++;
        }
    } else {
        while(j<arr2.length){
            res.push(arr2[j]);
            j++
        }
    }
    return res;
}

let solution = (arr,low,mid,high) => {
    let arr1 = arr.slice(low,mid + 1);
    let arr2 = arr.slice(mid + 1,high + 1);
    return merge(arr1,arr2);
}

console.log(solution([10,15,20,40,8,11,55],0,3,6));