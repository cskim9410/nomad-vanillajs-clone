const player = {
    name: "nico",
    age: 521,
}
console.log(player);

player.name = "nicolas";
console.log(player);

player.sexy = "soon";
console.log(player, console);

//function 복습

function plus(a, b) {
    console.log(a + b);

}
plus(5, 10);

//

const calculator = {
    add: function(a,b) {
        console.log(a + b);        
    }
}
calculator.add(5, 1);

//

const cal = {
    ad: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b) {

        console.log(a - b);
    },
    devide: function(a, b) {

        console.log(a / b);
    },
    power: function(a, b) {
        console.log(a ** b);
    }
    
}

cal.ad(20, 2);
cal.minus(20, 5);
cal.devide(40, 20);
cal.power(2, 3);
