let Anagram = (a, b) => {
    const obj1 = {};
    const obj2 = {};

    for (let i = 0; i < a.length; i++) {
        if (obj1[a[i]]) obj1[a[i]]++;
        else obj1[a[i]] = 1;
        if (obj2[b[i]]) obj2[b[i]]++;
        else obj2[b[i]] = 1;
    }

    for (const k in obj1) {
        if (obj1[k] != obj2[k]) return false;
    }

    return true;
}

let solution = (txt, pat) => {
    for (let i = 0; i <= txt.length - pat.length; i++) {
        if (Anagram(txt.slice(i, pat.length + i, 1), pat)) return true;
    }
    return false;
}

console.log(solution("geeksforgeeks", "rseek"));