const solution = (arr) => {
    let maxCount = 0;
    let currentCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++;
        } else if (currentCount > maxCount) {
            maxCount = currentCount;
            currentCount = 0;
        }
        if (arr[i] === 0) currentCount = 0;
    }
    if (currentCount > maxCount) return currentCount;
    else return maxCount;
}


console.log(solution([0, 1, 1, 0, 1, 0]))