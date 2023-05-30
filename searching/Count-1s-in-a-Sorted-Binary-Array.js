const solution = (arr) => {
    let n = 1;
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor((low + high)/2);
    let first = null;
    while (low <= high) {
        if (arr[mid] === n) {
            if(arr[mid - 1] < n || mid === 0){
                first = mid;
                break;
            } else {
                high = mid - 1;
            }
        }
        else if(arr[mid] > n) {
            high = mid - 1;
        } else if(arr[mid] < n){
            low = mid + 1;
        }
        mid = Math.floor((low+high)/2);
    }
    if(first === null) return 0;
    else return arr.length - first;
}

console.log(solution([0,0,0,0,0]))