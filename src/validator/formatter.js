function trim() {
    let name = '  Shabnum huda    '
    console.log('Trimmed name is: ',name.trim())
}

function lowerCase() {
    let name = 'ShaBNUM HUDA'
    console.log('Name in lowercase is: ',name.toLowerCase())
}

function upperCase() {
    let name = 'shabnum huda'
    console.log('Name in uppercase is: ',name.toUpperCase())
}

module.exports.trim = trim
module.exports.lowerCase = lowerCase
module.exports.upperCase = upperCase