const player = {
    name: "nico",
    age: 15,
    fat: true,
    sayHello: function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you!")
    }
}

player.sayHello("lynn");
player.sayHello("nico");