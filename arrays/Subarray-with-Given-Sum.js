const solution = (arr, sum) => {
    let index = 0;
    let currentSum = 0;
    for (i = 0; i < arr.length; i++) {
        currentSum = currentSum + arr[i];
        console.log(currentSum)
        if (currentSum === sum) return "Yes";
        else if (currentSum > sum) {
            while (currentSum > sum || currentSum === arr[i]) {
                currentSum = currentSum - arr[index];
                console.log("there", currentSum)
                index++;
                if (currentSum === sum) return "Yes";
            }
        }
    }
    return "No";
}

// console.log(solution([1,4,20,3,10,5],33));
// console.log(solution([10,4,0,0,3,10,5],7));
// console.log(solution([2,4],3));
console.log(solution([3, 2, 0, 4, 7], 6));