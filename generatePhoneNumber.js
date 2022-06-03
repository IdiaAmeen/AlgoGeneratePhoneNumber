// GENERATE PHONE NUMBER

const generatePhoneNumber = (nums) => {
  // let toNumber = nums.toString().split("");
  // let firstThree = toNumber.slice(0, 3).join("");
  // let secondThree = toNumber.slice(3, 6).join("");
  // let rest = toNumber.slice(6).join("");
  // let number = firstThree + "-" + secondThree + "-" + rest;
  // return number.toString();
  let numsToString;
  if (typeof nums === "object") {
    // to concat an array we will use join . Join does not work on other data types such as number
    numsToString = nums.join("");
  } else {
    numsToString = nums.toString();
  }
  let phoneNumber =
    `${numsToString.slice(0, 3)}` +
    "-" +
    `${numsToString.slice(3, 6)}` +
    "-" +
    `${numsToString.slice(6)}`;

  return phoneNumber;
};

console.log(generatePhoneNumber([7187129710]));

module.exports = generatePhoneNumber;
