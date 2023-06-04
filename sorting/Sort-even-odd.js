let solution = (arr) => {
    let i = -1;
    for(j = 0;j<arr.length;j++){
        if(arr[j] % 2 === 0){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];        
        } 
    }
    return arr;
}

console.log(solution([15,-3,-2,18,15,14,13,12]))