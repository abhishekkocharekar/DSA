const solution = (arr) => {
    arr.forEach((element, index) => {
        if (element === arr[index - 1]) {
            arr.splice(index, 1);
            arr.push(0);
        }
    });
    return arr;
}

console.log(solution([1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7]))