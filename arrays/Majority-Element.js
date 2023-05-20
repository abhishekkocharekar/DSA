const solution = (arr) => {
    let majorityIndex = -1, currentCount = 0;
    let majorityLimit = Math.floor(arr.length / 2) + 1;
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] = obj[arr[i]] + 1;
            if (obj[arr[i]] >= majorityLimit) {
                return i;
            }
        } else {
            obj[arr[i]] = 1;
        }
    }
    return majorityIndex;
}

console.log(solution([8, 3, 4, 8, 8]))
console.log(solution([3, 7, 4, 7, 7, 5]))
console.log(solution([20, 30, 40, 50, 50, 50, 50]))