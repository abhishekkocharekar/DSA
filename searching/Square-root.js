const solution = (n) => {
    let low = 0;
    let high = n;
    let mid = Math.floor((low + high)/2);
    while (low <= high) {
        if (mid * mid === n) return mid;
        else if(mid * mid > n) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
        mid = Math.floor((low+high)/2);
    }
    return mid;
}

console.log(solution(24))