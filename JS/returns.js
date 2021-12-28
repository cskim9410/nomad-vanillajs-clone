const age = 25
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}
const KrAge = calculateKrAge(age);

console.log(KrAge);

const cal = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {

        return a - b;
    },
    devide: function(a, b) {

        return a / b;
    },
    power: function(a, b) {
        return a ** b;
    }
    
}


const plusResult = cal.plus(20, 2);
const minusResult = cal.minus(plusResult, 5);
const devideResult = cal.devide(minusResult, plusResult);
const powerResult = cal.power(devideResult, plusResult);

