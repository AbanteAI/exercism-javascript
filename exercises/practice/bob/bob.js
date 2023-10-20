//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.trim();

  if (message === '') {
    return 'Fine. Be that way!';
  }

  const isQuestion = message.endsWith('?');
  const isYelling = message === message.toUpperCase() && message !== message.toLowerCase();

  if (isQuestion && isYelling) {
    return 'Calm down, I know what I\'m doing!';
  } else if (isQuestion) {
    return 'Sure.';
  } else if (isYelling) {
    return 'Whoa, chill out!';
  } else {
    return 'Whatever.';
  }
};
