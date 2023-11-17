function passwordValidation(password) {
    // 6-12 characters, no space, one digit, one lowercase, one uppercase & one special character
    let pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,12}$/
    return pattern.test(password)
}



module.exports = passwordValidation