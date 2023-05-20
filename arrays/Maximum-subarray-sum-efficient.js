const solution = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i] + arr[i - 1]) {
            arr[i] = arr[i] + arr[i - 1];
        }
    }
    console.log(arr);
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// console.log(solution([2,3,-8,7,-1,2,3]))
console.log(solution([-5, 1, -2, 3, -1, 2, -2]))