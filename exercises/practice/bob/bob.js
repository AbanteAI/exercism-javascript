//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.trim();
  const isYelling = message === message.toUpperCase() && message !== message.toLowerCase();
  const isQuestion = message.endsWith('?');
  
  if (isYelling && isQuestion) {
    return 'Calm down, I know what I\'m doing!';
  } else if (isYelling) {
    return 'Whoa, chill out!';
  } else if (isQuestion) {
    return 'Sure.';
  } else if (message === '') {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }
};
