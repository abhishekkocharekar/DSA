const solution = (arr) => {
    let waterStored = 0;
    let leftMax = [], rightMax = [];
    leftMax[0] = arr[0];
    let i = 0;
    for (i = 1; i < arr.length; i++) {
        leftMax[i] = Math.max(arr[i], leftMax[i - 1]);
    }
    rightMax[arr.length - 1] = arr[arr.length - 1];
    for (i = arr.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(arr[i], rightMax[i + 1]);
    }
    for (i = 0; i < arr.length; i++) {
        waterStored = waterStored + (Math.min(leftMax[i], rightMax[i]) - arr[i]);
    }
    return waterStored;
}


console.log(solution([3, 0, 1, 2, 5]))