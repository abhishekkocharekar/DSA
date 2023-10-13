/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let obj = {
        ')':'(',
        '}':'{',
        ']':'['
    };
    let stack = [];
    for(let i=0; i<s.length; i++){
        if(obj[s[i]]){
            if(obj[s[i]] !== stack[stack.length - 1]) return false;
            else stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};