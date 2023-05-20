let arr = [2, 8, 3, 9, 6, 5, 4];
const solution = () => {
    for (i = 1; i < arr.length; i++) {
        arr[i] = arr[i] + arr[i - 1];
    }
}
const getSum = (start, end) => {
    if (start === 0) return arr[end];
    else return arr[end] - arr[start - 1];
}
solution();
console.log(getSum(0, 2));
console.log(getSum(1, 3));
console.log(getSum(2, 6));