const solution = (arr) => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
    }
    for (i in obj) {
        console.log(i, obj[i]);
    }
}
solution([25, 30, 30, 10, 10, 10]);