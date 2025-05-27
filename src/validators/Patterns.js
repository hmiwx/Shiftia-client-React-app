const testEmail = (value) => {
    const emailPattent = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g
    return emailPattent.test(value)
}

const testPhoneNumber = (value) => {
    const mobilePhonePattern = /^09\d{9}$/;
    return mobilePhonePattern.test(value)
}

export default {
    testEmail,
    testPhoneNumber
}