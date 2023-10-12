/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [l,r] = [0,0];
    let max= 0;
    while(l<prices.length){
        r = l+1;
        while(r<prices.length){
            if(prices[r]<prices[l]){
                l = r;
                break;
            } else if(prices[r] - prices[l] > max){
                max = prices[r] - prices[l];
            }
            r++;
        }
        if(r>=prices.length) return max;
    }
};