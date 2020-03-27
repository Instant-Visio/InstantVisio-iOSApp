const emailRegex = /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
const numericRegex = /^([0-9]*)$/;
const phoneNumber = /^[+]([0-9]){10,12}$/;

//used in password
const containsWhiteSpace = /[\t,\n,\0,\r,\s]/;
const containsSpecialCaractere = /[!,@@,#,$,%,^,&,*,?,_,~]/;
const containsNumber = /[0-9]/;
const passwordLength = /^.{8,12}$/;

export const InputCheckers = {
  required: value => value && value !== '',
  email: value => emailRegex.test(value),
  numeric: value => numericRegex.test(value),
  accepted: value => value === true,
  phoneNumber: value => phoneNumber.test(value),

  //used in password
  doesntContainswhiteSpace: value => !containsWhiteSpace.test(value),
  containsSpecialCaractere: value => containsSpecialCaractere.test(value),
  containsNumber: value => containsNumber.test(value),
  passwordLength: value => passwordLength.test(value)
};

export const checkCondition = (value, checker) => {
  if (typeof checker === 'string') {
    return InputCheckers[checker](value);
  } else if (typeof checker === 'function') {
    return checker(value);
  }
  return false;
};

//Input Methods
export const isInputValid = (value, checkConditions) => {
  let isInputCorrect = true;

  for (const item of checkConditions) {
    isInputCorrect = isInputCorrect && checkCondition(value, item.checker);
  }
  return isInputCorrect;
};

export const checkInput = (value, checkConditions) => {
  let message = '';

  for (const item of checkConditions) {
    if (!checkCondition(value, item.checker)) {
      message = message.concat(`- ${item.message}`).concat('\n');
    }
  }
  return message;
};

export const checkInputByOrder = (value, checkConditions) => {
  for (const item of checkConditions) {
    if (!checkCondition(value, item.checker)) {
      return item.message;
    }
  }
  return undefined;
};


//Form methods

export const isFormValid = valueConditionList => {
  let isFormCorrect = true;

  for (const item of valueConditionList) {
    const { value, checkConditions } = item;
    isFormCorrect = isFormCorrect && isInputValid(value, checkConditions);
  }

  return isFormCorrect;
};

export const checkForm = valueConditionList => {
  let message = '';

  for (const item of valueConditionList) {
    const { value, checkConditions } = item;
    message = message.concat(checkInput(value, checkConditions)).concat('\n');
  }
  return message;
};

export const checkFormByOrder = valueConditionList => {
  for (const item of valueConditionList) {
    const { value, checkConditions } = item;
    const checkInputByOrderMessage = checkInput(value, checkConditions);
    if (checkInputByOrderMessage) {
      return checkInputByOrderMessage;
    }
  }
  return undefined;
};

//specification|documentation
/*
format of the object checkCondition is:
{
  checker:string|function,
  message:string
}

checker: represent the checker we need to execute return true if 
         the check is ok return false if it isnt
message: message that will be used in case the check output is false

*/
