let solution = (arr) => {

    for(let i=0;i<arr.length;i++){
        if(i%2==0){
            for(let j=0;j<arr[0].length;j++){
                console.log(arr[i][j]);
            }
        } else {
            for(let j=arr[0].length - 1;j>=0;j--){
                console.log(arr[i][j]);
            }
        }
    }

}

solution([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);