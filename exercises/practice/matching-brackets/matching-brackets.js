//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (input) => {
    const stack = [];
    const openingBrackets = ['[', '{', '('];
    const closingBrackets = [']', '}', ')'];
    
    for (let i = 0; i < input.length; i++) {
        const bracket = input[i];
        
        if (openingBrackets.includes(bracket)) {
            stack.push(bracket);
        } else if (closingBrackets.includes(bracket)) {
            const lastOpeningBracket = stack.pop();
            const correspondingClosingBracket = closingBrackets[openingBrackets.indexOf(lastOpeningBracket)];
            
            if (bracket !== correspondingClosingBracket) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};
