let solution = (arr) => {
    for(let i=0;i<arr.length;i++){
        let low = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[low] > arr[j]){
                low = j;
            }
        }
        [arr[i],arr[low]] = [arr[low],arr[i]];
    }
    return arr;
}

console.log(solution([10,5,8,20,2,18]))