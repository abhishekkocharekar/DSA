let solution = (arr1,arr2) => {
    let res = [];
    if(arr2[0] >= arr1[arr1.length - 1]){
        let i=0;
        while(i<arr2.length){
            arr1.push(arr2[i]);
            i++;
        }
        return arr1;
    } else if(arr1[0] >= arr2[arr2.length - 1]) {
        let i=0;
        while(i<arr1.length){
            arr2.push(arr1[i]);
            i++;
        }
    }
    let count = 0,i=0,j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] > arr2[j]){
            res[count] = arr2[j];
            j++;
            count++;
        } else {
            res[count] = arr1[i];
            i++;
            count++;
        }
    }
    if(i<arr1.length){
        while(i<arr1.length){
            res.push(arr1[i]);
            i++;
        }
    } else {
        while(j<arr2.length){
            res.push(arr2[j]);
            j++
        }
    }
    return res;
}

console.log(solution([10,15,20],[21,22]));