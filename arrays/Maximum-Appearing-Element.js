const solution = (arr1, arr2) => {
    let current, max = 0, j, i, res;
    for (i = arr1[0]; i <= arr2[arr2.length - 1]; i++) {
        current = 1;
        for (j = 0; j < arr1.length; j++) {
            if (i < arr1[j]) {
                break;
            }
            if (arr1[j] <= i && i <= arr2[j]) {
                current++;
            }
        }
        if (current > max) {
            max = current
            res = i;
        }
    }
    return res;
}
console.log(solution([1, 2, 5, 15], [5, 8, 7, 18]));
console.log(solution([1, 2], [5, 4]));
console.log(solution([1, 2, 4], [4, 5, 7]));
// console.log(solution([3,4,8,-9,9,7]));