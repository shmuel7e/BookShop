'use strict'
function getRandomID() {
    var chars = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var id = ''
    for (let i = 0; i < 10; i++) {
        id += chars[getRandomNumber(chars.length)]
    }
    return id;
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}