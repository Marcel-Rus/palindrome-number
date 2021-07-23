/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let numString = x.toString();
    
    for (let i = 0, j = numString.length - 1; i < numString.length / 2; i++, j--) {
        if (numString[i] !== numString[j]) {
            return false;
        }
    }
    
    return true;
};