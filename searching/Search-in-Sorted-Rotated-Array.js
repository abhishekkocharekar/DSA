const binary = (arr,low,high,n) => {
    let mid = Math.floor((low + high)/2);
    while (low <= high) {
        if (arr[mid] === n) return mid;
        else if(arr[mid] > n) {
            high = mid - 1;
        } else if(arr[mid] < n){
            low = mid + 1;
        }
        mid = Math.floor((low+high)/2);
    }
    return -1;
}

const solution = (arr, n) => {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    if (arr[low] > n && arr[high] < n) return -1;
    while (low <= high) {
        if(low === high){
            if(arr[low] === n) return low;
            else return -1;
        }
        mid = Math.floor((low + high) / 2);
        if(arr[mid] === n) return mid;
        else if(arr[mid] > arr[low]){
            if(n >= arr[low] && n < arr[mid]) return binary(arr,low, mid - 1,n);
            else low = mid + 1;
        } else if(arr[mid] < arr[high]){
            if(n > arr[mid] && n <= arr[high]) return binary(arr,mid + 1,high,n);
            else high = mid - 1;
        }
    }
    return -1;
}

console.log(solution([100,200,300,400, 20, 30, 40], 500));
// console.log(solution([100, 200, 500, 1000, 2000, 10,20], 2000));