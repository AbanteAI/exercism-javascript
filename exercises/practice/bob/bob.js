//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.trim();
  
  const isQuestion = message.endsWith("?");
  const isYelling = message.toUpperCase() === message && message.toLowerCase() !== message;
  const isSilent = message.length === 0;

  if (isQuestion && isYelling) {
    return 'Calm down, I know what I\'m doing!';
  } else if (isQuestion) {
    return 'Sure.';
  } else if (isYelling) {
    return 'Whoa, chill out!';
  } else if (isSilent) {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }
};
