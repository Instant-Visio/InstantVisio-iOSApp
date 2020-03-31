const emailRegex = /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
const phoneNumber = /^[+]([0-9]){7,30}$/;

export const InputCheckeremail = value => emailRegex.test(value);
export const InputCheckersphoneNumber = value => phoneNumber.test(value);

