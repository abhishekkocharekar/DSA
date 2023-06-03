let solution = (arr,p) => {
    let low = 0;
    let high = arr.length - 2;
    while(low<high){
        if(arr[low] > arr[p]){
            [arr[low],arr[high]] = [arr[high],arr[low]];
            high--;
        } else {
            low++;
        }
    }
    [arr[p],arr[high+1]] = [arr[high+1],arr[p]]
    return arr;
}

console.log(solution([10,80,9,99,0,30,90,40,50,2,4,15,80,100,1,12,70],16));
console.log(solution([10,80,30,90,40,50,70],6))