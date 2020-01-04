function convertToRoman(num) {
    let numerals = ['I','V','X','L','C','D','M'];

    let thousands = numerals.slice(6);
    let hundreds = numerals.slice(4);
    let tens = numerals.slice(2,5);
    let ones = numerals.slice(0,3);

    let groups = [thousands, hundreds, tens, ones];

    let digits = Array.from(num.toString()).map(Number);
    let converted = [];

    var numberLength = digits.length;
    var startingPoint = 4-numberLength;
    //console.log("length of number is "+numberLength);

    function calculateDigit(arr, value) {
        var romanString;
        //console.log("calculating a digit");
        //console.log('arr is '+arr);
        //console.log('value is '+value);
        
        switch (value) {
            case 0:
                romanString = "";
                break;
            case 1:
            case 2:
            case 3:
                romanString = arr[0].repeat(value);
                break;
            case 4:
                romanString = arr[0] + arr[1];
                break;
            case 5:
                romanString = arr[1];
                break;
            case 6:
            case 7:
            case 8:
                romanString = arr[1] + arr[0].repeat(value-5);
                break;
            case 9:
                romanString = arr[0]+arr[2];
                break;
        }
        //console.log("roman value is "+romanString)
        return romanString
    }

    //console.log(calculateDigit(tens, 5))

    for (var i = 0 ; i < digits.length; i++) {

        if (digits.length == 4) {
            //console.log("has thousands");
            converted[0] = 'M'.repeat(digits[0]);

            for (i = 1; i < digits.length; i++) {
                converted[i] = calculateDigit(groups[i], digits[i])
            }

        } else {
                converted[i] = calculateDigit(groups[startingPoint+i], digits[i])
        }

    }

    var finalString = converted.join("");
    //console.log("converted is "+finalString)
    return finalString;
}

console.log(convertToRoman(9));
