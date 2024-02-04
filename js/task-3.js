/** 
 * Функція checkForSpam(message) приймає рядок(параметр message),
 * перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки.
 * Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.
*/

// function checkForSpam(message) {
//     const blacklistedWord1 = "spam";
//     const blacklistedWord2 = "sale";
// return message.toLowerCase().includes(blacklistedWord1) || message.toLowerCase().includes(blacklistedWord2);
//  }

/** Improvments 1*/
 
// function checkForSpam(message) {
//     const normalizedMessage = message.toLowerCase();
//     const blacklistedWord1 = "spam";
//     const blacklistedWord2 = "sale";
//     return (
//         normalizedMessage.includes(blacklistedWord1) || normalizedMessage.includes(blacklistedWord2)
//     );
//  }

/** Improvments 2*/
 
function checkForSpam(message) {
    const normalizedMessage = message.toLowerCase();  
    return (
        normalizedMessage.includes("spam") || normalizedMessage.includes("sale")
    );
 }
    
    
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

