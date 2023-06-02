let merge = (arr,low,mid,high) => {
    let arr1 = arr.slice(low,mid + 1);
    let arr2 = arr.slice(mid + 1,high + 1);
    arr = [];
    let i=0,j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] > arr2[j]){
            arr.push(arr2[j]);
            j++;
        } else {
            arr.push(arr1[i]);
            i++;
        }
    }
    if(i<arr1.length){
        while(i<arr1.length){
            arr.push(arr1[i]);
            i++;
        }
    } else {
        while(j<arr2.length){
            arr.push(arr2[j]);
            j++
        }
    }
    return arr;
}

let mergeSort = (arr,low,high) => {
    if(low<high){
        let mid = Math.floor(low + ((high-low)/2));
        mergeSort(arr,low,mid);
        mergeSort(arr,mid+1,high);
        return merge(arr,low,mid,high);
    }
}

console.log(mergeSort([10,15,20,40,8,11,55],0,6));