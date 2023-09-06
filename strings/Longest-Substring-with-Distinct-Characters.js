let solution = (str) => {
    let max = 0;
    let start = 0;
    let end = 0;
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if(obj[str[i]]){
            delete obj[str[i]];
            start++;
        } else {
            obj[str[i]] = 1;
            end = i;
            if(max < end - start + 1){
                max = end - start + 1;
            }
        }
    }
    return max;
}

console.log(solution("abcdabc"));
console.log(solution("aaa"));
console.log(solution("abac"));
console.log(solution("abaacdbab"));