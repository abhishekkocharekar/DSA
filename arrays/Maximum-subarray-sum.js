const solution = (arr) => {
    let maxSum = arr[0];
    let currentSum;
    for (let i = 0; i < arr.length; i++) {
        currentSum = arr[i];
        if (currentSum > maxSum) maxSum = currentSum;
        for (let j = i + 1; j < arr.length; j++) {
            currentSum = currentSum + arr[j];
            if (currentSum > maxSum) maxSum = currentSum;
        }
    }
    return maxSum;
}


console.log(solution([2, 3, -8, 7, -1, 2, 3]))