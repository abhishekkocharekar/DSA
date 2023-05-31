const solution = (arr, x) => {
    for (let i = 0; i < arr.length - 3; i++) {
        let low = i+1;
        let high = arr.length - 1;
        let target = x - arr[i];
        while (low < high) {
            if (arr[low] + arr[high] === target) return true;
            else if (arr[low] + arr[high] > target) high = high - 1;
            else low = low + 1;
        }
    }
    return false;
}

// console.log(solution([2, 4, 8, 9, 11, 12, 20, 30], 34));
console.log(solution([2,4,8,9,20,40], 35));