const binary = (arr,low,high,n) => {
    console.log(arr)
    let mid = Math.floor((low + high)/2);
    while (low <= high) {
        if (arr[mid] === n) return mid;
        else if(arr[mid] > n) {
            high = mid - 1;
        } else if(arr[mid] < n){
            low = mid + 1;
        }
        mid = Math.floor((low+high)/2);
    }
    return -1;
}

const solution = (arr,n) => {
    let i = 1;
    while (arr[i - 1]<=n) {
        if(arr[i-1] === n) return i -1;
        i = i*2;
    }
    return binary(arr,i/2,i-2,n);
}

console.log(solution([10,20,30,40,50,60,70,80,90,100],50))