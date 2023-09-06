let solution = (txt, pat) => {
    for(let i=0; i<=txt.length - pat.length; i++){
        if(txt.slice(i,pat.length + i,1) === pat) console.log(i);
    }
}

solution("ABCAAAD", "ABD");