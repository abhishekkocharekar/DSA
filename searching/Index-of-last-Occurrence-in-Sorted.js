const solution = (arr,n) => {
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor((low + high)/2);
    while (low <= high) {
        if (arr[mid] === n) {
            if(arr[mid + 1] > n || mid === arr.length - 1){
                return mid;
            } else {
                low = mid + 1;
            }
        }
        else if(arr[mid] > n) {
            high = mid - 1;
        } else if(arr[mid] < n){
            low = mid + 1;
        }
        mid = Math.floor((low+high)/2);
    }
    return -1;
}

console.log(solution([1,1,2,2,2,2,2,2,2,2,2,2,2,3,4,4],4))