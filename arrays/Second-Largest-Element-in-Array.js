const solution = (arr) => {
    if (arr.length < 2) {
        return "Invalid Input";
    }
    let max = 0;
    let secondMax = -1;
    arr.forEach((element, index) => {
        if (element > arr[max]) {
            secondMax = max;
            max = index;
        } else if (element != arr[max]) {
            if (secondMax == -1 || element > arr[secondMax]) {
                secondMax = index;
            }
        }
    });
    return secondMax;
}

console.log(solution([10, 8, 10, 10, 7]))