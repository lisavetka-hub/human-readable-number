function makeNumberString(number) {
    let bellowTwenty = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    };
    let tens = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    };
    let resValue = "";
    if (number < 20) {
        return bellowTwenty[number] + resValue;
    } else {
        return (
            tens[Math.floor(number / 10)] +
            " " +
            bellowTwenty[number % 10] +
            resValue
        );
    }
}
module.exports = function toReadable(number) {
    let fractionName = {
        1000000: "million",
        100000: "hundred thousand",
        1000: "thousand",
        100: "hundred",
        1: ""
    };
    let resValue = "";
    if (number == 0) return "zero";
    Object.keys(fractionName)
        .sort((a, b) => b - a)
        .forEach(fraction => {
            if (number >= fraction) {
                let currentPart = Math.floor(number / fraction);
                resValue +=
                    makeNumberString(currentPart) +
                    " " +
                    fractionName[fraction] +
                    " ";
            }
            number = number % fraction;
        });
    return resValue.trim();
};
