const requiredValue = "REQUIRED_VALUE";
const minValue = "MIN_VALUE";
const maxValue = "MAX_VALUE";
const emailValue = "EMAIL_VALUE";
const mobileValue = "MOBILE_VALUE";

export const errorMessage = function (validation) {
  switch (validation.value) {
    case requiredValue:
      return "این فیلد نمیتواند خالی باشد."
    case minValue:
      return `حداقل طول ${validation.min} کارکتر موردنیاز است`
    case maxValue:
      return `حداکثر طول مجاز ${validation.max} کارکتر است`
    case emailValue:
      return "ایمیل وارد شده نامعتبر است"
    case mobileValue:
      return "شماره تلفن باید ۱۱ رقم باشد و با ۰۹ شروع شود"
    default:
      return ""
  }
}

export const requiredValidator = () => ({
  value: requiredValue,
});

export const minValidator = (min) => ({
  value: minValue,
  min,
});

export const maxValidator = (max) => ({
  value: maxValue,
  max,
});

export const emailValidator = () => ({
  value: emailValue,
});

export const mobileValidator = () => ({
  value: mobileValue,
});

export default { requiredValue, minValue, maxValue, emailValue, mobileValue }