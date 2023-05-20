const solution = (arr) => {
    for (i = 1; i < arr.length; i++) {
        arr[i] = arr[i] + arr[i - 1];
    }
    for (i = 0; i < arr.length; i++) {
        if (i === 0) {
            if (arr[arr.length - 1] - arr[i] === 0) {
                return "Yes";
            }
        } else if (i === arr.length - 1) {
            if (arr[i - 1] === 0) {
                return "Yes";
            }
        } else {
            if (arr[i - 1] === arr[arr.length - 1] - arr[i]) {
                return "Yes";
            }
        }
    }
    return "No";
}
console.log(solution([3, 4, 8, -9, 20, 6]));
console.log(solution([4, 2, -2]));
console.log(solution([4, 2, 2]));
console.log(solution([3, 4, 8, -9, 9, 7]));