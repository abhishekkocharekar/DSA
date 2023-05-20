const solution = (arr, d) => {
    while (d > 0) {
        arr.push(arr[0]);
        arr.splice(0, 1);
        d--;
    }
    return arr;
}

console.log(solution([1, 2, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7], 3))