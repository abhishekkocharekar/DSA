const solution = (arr,n) => {
    if(arr.length === 1) return arr[0];
    if(arr[0] >= arr[1]) return arr[0];
    if(arr[n-1] >= arr[n-2]) return arr[n-1];
    let low = 0;
    let high = n-1;
    let mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if(arr[mid] >= arr[mid-1] && arr[mid] >= arr[mid+1]) return arr[mid];
        else if(arr[mid] < arr[mid-1]) high = mid - 1;
        else low = mid + 1;
    }
}

console.log(solution([100,200,300, 20, 30, 40,30],7));
// console.log(solution([100, 200, 500, 1000, 2000, 10,20], 2000));