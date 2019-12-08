function checkForSpam(str) {
 const    checkWords = "sale [spam]"
 const   strForCheck = str.toLowerCase().split(' ')
let spamCounter = 0


    for (let word of strForCheck) {
      let spamCheck = checkWords.includes(word)

        if (spamCheck === true) {
            spamCounter ++
        } 
    }
    if (spamCounter === 0) {
        return false
    } else return true
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true