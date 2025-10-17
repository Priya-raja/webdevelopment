function validate(email) {
    
    let pattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email)
}

console.log(validate('priya@gmail.com'))