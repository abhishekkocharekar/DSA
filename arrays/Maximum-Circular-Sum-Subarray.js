// const solution = (arr) => {
//     let maxArr = [];
//     maxArr[0] = arr[0];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i] < arr[i] + maxArr[maxArr.length - 1]){
//             maxArr.push(arr[i] + arr[i-1]);
//         }
//     }
//     arr.splice(0, 0, arr[arr.length - 1]);
//     arr.splice(arr.length - 1,1);
//     console.log(arr);
//     maxArr.push(arr[0]);
//     for(let i=1;i<arr.length;i++){
//         if(arr[i] < arr[i] + maxArr[maxArr.length - 1]){
//             maxArr.push(arr[i] + arr[i-1]);
//         }
//     }
//     let max = maxArr[0];
//     for(let i=1;i<maxArr.length;i++){
//         if(maxArr[i] > max){
//             max = maxArr[i];
//         }
//     }
//     return max;
// }

// // console.log(solution([2,3,-8,7,-1,2,3]))
// console.log(solution([5,-2,3,4]))