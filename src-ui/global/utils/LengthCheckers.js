export const LengthCheckers = {
  max: (value, maxLength) => value.length <= maxLength,
  min: (value, minLength) => value.length >= minLength,
  length: (value, lengthValue) => value.length === lengthValue
};
  
export const checkLength = (value, checkConditions, lengths, messages) => {
  let message = '';
  
  for (const index in checkConditions) {
    if (!LengthCheckers[checkConditions[index]](value, lengths[index])) {
      message = message.concat(messages[index]);
    }
  }

  return message;
};
