let solution = (arr) => {
    let p = 0;
    let i = -1;
    for(j = 0;j<arr.length;j++){
        if(arr[j] < p){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];        
        } 
    }
    return arr;
}

console.log(solution([15,-3,-2,18]))