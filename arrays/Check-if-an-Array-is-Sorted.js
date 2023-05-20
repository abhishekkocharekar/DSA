const solution = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return "NO"
        }
    }
    return "YES";
}

console.log(solution([1, 2, 2, 3]))