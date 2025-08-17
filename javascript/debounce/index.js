const input = document.querySelector('.input');
console.log(input)

function handleInput(event){
console.log(event.target.value)
}

function debounce(callback, delay){
    // give args as rest becoz see in handleInput we have a paramter as event. so it can be any number
    let timerId;
    return function(...args){
        // a function to call on evenlistener is callback
        clearTimeout(timerId)
        timerId = setTimeout(()=>{
            callback(...args)
        },delay)
    }
}

const debouncedHandler  = debounce(handleInput,1000)//return a function -> pass it to eventhandler
const value = input.addEventListener('keyup', debouncedHandler)

