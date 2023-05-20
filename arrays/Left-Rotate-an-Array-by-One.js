const solution = (arr) => {
    arr.push(arr[0]);
    arr.splice(0, 1);
    return arr;
}

console.log(solution([30, 5, 20]))