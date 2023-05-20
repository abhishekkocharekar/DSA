const solution = (arr, k) => {
    let arr2 = JSON.parse(JSON.stringify(arr));
    for (i = 1; i < arr.length; i++) {
        if (i >= k) {
            arr[i] = arr[i] + arr[i - 1] - arr2[i - k];
        }
        else {
            arr[i] = arr[i] + arr[i - 1]
        }
    }
    console.log(arr2);
    console.log(arr);
    let max = arr[k];
    for (i = k + 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(solution([1, 8, 30, -5, 20, 7], 3));
// console.log(solution([10,5,-2,20,1],3));
// console.log(solution([5,-10,6,90,3],2));