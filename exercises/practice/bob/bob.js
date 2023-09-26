//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.trim();

  if (message === "") {
    return "Fine. Be that way!";
  }

  const isQuestion = message.endsWith("?");
  const isYelling = message.toUpperCase() === message && message.toLowerCase() !== message;

  if (isQuestion && isYelling) {
    return "Calm down, I know what I'm doing!";
  }

  if (isQuestion) {
    return "Sure.";
  }

  if (isYelling) {
    return "Whoa, chill out!";
  }

  return "Whatever.";
};
