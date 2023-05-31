const solution = (arr) => {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr2[arr[i]] === true) return arr[i];
        else arr2[arr[i]] = true;
    }
    return -1;
}

// console.log(solution([2, 4, 8, 9, 11, 12, 20, 30], 34));
console.log(solution([0,0]));