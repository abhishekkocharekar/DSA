let solution = (arr,low,high) => {
    let p = arr[high];
    let i = low - 1;
    let j;
    for(j = low;j<high;j++){
        if(arr[j] < p){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];        
        } 
    }
    [arr[i+1],arr[high]] = [arr[high],arr[i+1]];
    return i+1;
}

console.log(solution([10,80,9,99,0,30,90,40,50,2,4,15,80,100,1,12,70],0,16));
// console.log(solution([10,80,30,90,40,50,70],0,6));