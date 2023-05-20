const solution = (arr) => {
    let obj = { 0: [], 1: [] }
    let current = arr[0];
    let start = 0, end;
    let i;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] !== current) {
            end = i - 1;
            obj[current].push(`From ${start} to ${end}`);
            current = arr[i];
            start = i;
        }
    }
    end = i - 1;
    obj[current].push(`From ${start} to ${end}`);
    if (obj[0].length === 0 || obj[1].length === 0) return;
    if (obj[0].length > obj[1].length) {
        obj[1].forEach(data => console.log(data));
    } else {
        obj[0].forEach(data => console.log(data));
    }
}

// solution([1,0,0,0,1,0,0,1,1,1,1])
solution([0, 1])