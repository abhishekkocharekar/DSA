let solution = (arr,low,high) => {
    let p = arr[low];
    let i = low - 1;
    let j = high + 1;
    while(true){
        do{
            i++;
        } while(arr[i] < p);
        do{
            j--;
        } while(arr[j] > p);
        if(i>=j) return arr;
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
}

// console.log(solution([10,80,9,99,0,30,90,40,50,2,4,15,80,100,1,12,70],0,16));
console.log(solution([5,3,8,4,2,7,1,10],0,7));