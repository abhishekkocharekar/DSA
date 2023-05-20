const solution = (arr) => {
    let profit = 0;
    let i = 0;
    while (i < arr.length) {
        let nextLargerst = arr[i];
        let flag = false;
        let j = i + 1;
        for (j; j < arr.length; j++) {
            if (arr[i] < arr[j] && arr[j] > nextLargerst) {
                nextLargerst = arr[j];
                flag = true;
            } else break;
        }
        if (flag) profit = profit + (nextLargerst - arr[i]);
        i = flag ? j : i + 1;
    }
    return profit;
}

console.log(solution([1, 5, 3, 1, 2, 8]))