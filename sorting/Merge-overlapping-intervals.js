function sortFunction(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}

let solution = (arr) => {
    let res = [];
    arr.sort(sortFunction);
    let start = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i-1][1] < arr[i][0] || arr[i-1][1] > arr[i][1]){
            res.push([Math.min(start[0],arr[i-1][0]),Math.max(arr[i-1][1],start[1])]);
            start = arr[i];
        }
    }
    if(start !== arr[arr.length - 1]){
        res.push([Math.min(start[0],arr[arr.length-1][0]),Math.max(arr[arr.length-1][1],start[1])]);
    } else {
        res.push(arr[arr.length-1]);
    }
    return res;
}

// console.log(solution([[1,3],[2,4],[5,7],[6,8]]));
// console.log(solution([[7,9],[6,10],[4,5],[1,3],[2,4]]));
// console.log(solution([[5,10],[3,15],[18,30],[2,7]]));
console.log(solution([[6,8],[1,9],[2,4],[4,7]]));