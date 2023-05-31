const solution = (arr,x) => {
    let low = 0;
    let high = arr.length - 1;
    while (low < high) {
        if(arr[low] + arr[high] === x) return true;
        else if(arr[low] + arr[high] > x) high = high - 1;
        else low = low + 1;
    }
    return false;
}

console.log(solution([2,4,8,9,11,12,20,30],34));
// console.log(solution([100, 200, 500, 1000, 2000, 10,20], 2000));