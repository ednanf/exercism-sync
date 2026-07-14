//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  // pluck the last digit of the number
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  // define which ending it should have according to the number
  let ending;

  if(lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    ending = 'th';
  } else {
    switch (lastDigit) {
  case 1:
    ending = 'st';
    break;
  case 2:
    ending = 'nd';
    break;
  case 3:
    ending = 'rd';
    break;
  default:
    ending = 'th';
    break;
}
  }
  
  // generate message
  return `${name}, you are the ${number}${ending} customer we serve today. Thank you!`
}