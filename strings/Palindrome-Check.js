let solution = (str) => {
    let i = 0;
    let j = str.length - 1;
    while(i < j){
        if(str[i] !== str[j]) return 0;
        i++;
        j--;
    }
    return 1;
}

console.log(solution("ABBa"));