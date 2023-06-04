let solution = (arr, p) => {
    let low = 0;
    let high = arr.length - 1;
    for (let i = 0; i <= high; i++) {
        if (arr[i] < p) {
            [arr[i], arr[low]] = [arr[low], arr[i]];
            low++;
        } else if (arr[i] > p) {
            [arr[i], arr[high]] = [arr[high], arr[i]];
            high--;
            i--;
        }
    }
    return arr;
}

console.log(solution([2, 1, 2, 20, 10, 20, 1], 2))
