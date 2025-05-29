import rules from "./Rules";
import regex from "./Patterns";

const validator = (value, validations) => {

  let validationResults = [];

  for (const validator of validations) {
    if (validator.value === rules.requiredValue) {
      value.trim().length === 0 && validationResults.push(validator);
    }
    if (validator.value === rules.minValue) {
      value.trim().length < validator.min && validationResults.push(validator);
    }
    if (validator.value === rules.maxValue) {
      value.trim().length > validator.max && validationResults.push(validator);
    }
    if (validator.value === rules.emailValue) {
      !regex.testEmail(value) && validationResults.push(validator);
    }
    if(validator.value === rules.mobileValue){
      !regex.testPhoneNumber(value) && validationResults.push(validator);
    }
  }

  return validationResults;
  
};

export default validator;
