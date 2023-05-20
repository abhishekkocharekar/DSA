const solution = (arr) => {
    let minValue = arr[0];
    let res = arr[1] - arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (res < arr[i] - minValue) {
            res = arr[i] - minValue
        }
        if (minValue > arr[i]) {
            minValue = arr[i];
        }
    }
    return res;
}
console.log(solution([30, 10, 8, 2]));