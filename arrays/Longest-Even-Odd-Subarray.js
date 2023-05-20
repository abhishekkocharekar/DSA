const solution = (arr) => {
    let maxCount = 1, currentCount = 1;
    for (let i = 1; i < arr.length; i++) {
        if ((arr[i] % 2 === 0 && arr[i - 1] % 2 === 1) || (arr[i] % 2 === 1 && arr[i - 1] % 2 === 0)) {
            currentCount++;
        } else {
            maxCount = Math.max(currentCount, maxCount);
            currentCount = 1;
        }
    }
    maxCount = Math.max(currentCount, maxCount);
    return maxCount;
}

console.log(solution([10, 12, 14, 7, 8]))
console.log(solution([5, 10, 20, 6, 3, 8]))