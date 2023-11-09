//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const tokenize = (input) => {
    const tokens = input
        .replace('What is ', '')
        .replace('?', '')
        .replace('plus', '+')
        .replace('minus', '-')
        .replace('multiplied by', '*')
        .replace('divided by', '/')
        .split(' ');

    return tokens;
};

const evaluate = (tokens) => {
    let result = parseInt(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const operand = parseInt(tokens[i + 1]);

        switch (operator) {
            case '+':
                result += operand;
                break;
            case '-':
                result -= operand;
                break;
            case '*':
                result *= operand;
                break;
            case '/':
                result /= operand;
                break;
            default:
                throw new Error('Unsupported operation');
        }
    }

    return result;
};

export const answer = (input) => {
    const tokens = tokenize(input);
    const result = evaluate(tokens);

    return result;
};
