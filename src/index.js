module.exports = function toReadable(number) {
    const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let str = '';
    let arrayFromNumber = [];
    if (number < 20)
        return str = digits[number]
    else if (number < 100) {
        arrayFromNumber = Array.from(number.toString(), Number)
        return str = arrayFromNumber[1] != 0 ? tens[arrayFromNumber[0] - 2] + ' ' + digits[arrayFromNumber[1]] : tens[arrayFromNumber[0] - 2]
    }
    else if (number < 1000) {
        arrayFromNumber = Array.from(number.toString(), Number)
        if (arrayFromNumber[2] == 0 && arrayFromNumber[1] == 0) {
            
            return str = digits[arrayFromNumber[0]] + " hundred"
        }
        else if (arrayFromNumber[1] == 0 && arrayFromNumber[2] != 0) {
            return str = digits[arrayFromNumber[0]] + " hundred " + digits[arrayFromNumber[2]]
        }
        else if (arrayFromNumber[2] == 0 && arrayFromNumber[1] != 0 && arrayFromNumber[1] != 1) {
            return str = digits[arrayFromNumber[0]] + " hundred " + tens[arrayFromNumber[1] - 2]
        }
        else if (arrayFromNumber[1] == 1) {
            return str = digits[arrayFromNumber[0]] + " hundred " + digits[arrayFromNumber[2]+10]
        }       

        else {
            return str = digits[arrayFromNumber[0]] + " hundred " + tens[arrayFromNumber[1] - 2] + ' ' + digits[arrayFromNumber[2]]
        }
    }
    else
        return str = 'number is too big'
}

