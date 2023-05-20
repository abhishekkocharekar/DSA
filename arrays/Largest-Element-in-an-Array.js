const solution = (arr) => {
    let indexMax = 0;
    arr.forEach((element, index) => {
        if (element > arr[indexMax]) {
            indexMax = index;
        }
    });
    return indexMax;
}

console.log(solution([4, 6, 9, 2, 6, 1, 0, 10]))