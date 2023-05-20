const solution = (arr1, arr2) => {
    let max = 0, i, res;
    let freq = [];
    for (i = 0; i < arr1.length; i++) {
        freq[arr1[i]] = 1;
        freq[arr2[i]] = -1;
    }
    if (freq[0] === undefined) freq[0] = 0;
    for (i = 1; i < freq.length; i++) {
        if (freq[i] === undefined) freq[i] = 0;
        freq[i] = freq[i] + freq[i - 1];
        if (freq[i] > max) {
            max = freq[i];
            res = i;
        }
    }
    return res;
}
console.log(solution([1, 2, 5, 15], [5, 8, 7, 18]));
console.log(solution([1, 2], [5, 4]));
console.log(solution([1, 2, 4], [4, 5, 7]));
// console.log(solution([3,4,8,-9,9,7]));