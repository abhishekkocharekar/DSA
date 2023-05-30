const solution = (arr, n, low, high) => {
    if(low>high) return -1;
    let mid = Math.floor((low+high) / 2);
    if (arr[mid] === n) return mid;
    else if (arr[mid] > n) high = mid - 1; 
    else low = mid + 1;
    return solution(arr, n, low, high);
}

console.log(solution([1, 1, 2, 3, 4, 5, 6, 7], 1, 0, 7))