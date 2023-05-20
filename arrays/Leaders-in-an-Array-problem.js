const solution = (arr) => {
    let currLeader = arr[arr.length - 1];
    console.log(currLeader);
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > currLeader) {
            currLeader = arr[i];
            console.log(arr[i]);
        }
    }
}

solution([7, 10, 4, 3, 10, 6, 5, 2])