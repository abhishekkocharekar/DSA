const solution = (arr) => {
    let profit = 0;
    let buyAt = 0;
    let i = 1
    for (i; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            profit = profit + (arr[i - 1] - arr[buyAt])
            buyAt = i
        } else if (arr[i] < arr[buyAt]) {
            buyAt = i
        }
    }
    profit = profit + (arr[i - 1] - arr[buyAt]);
    return profit;
}


console.log(solution([2, 5, 1, 8, 12]))