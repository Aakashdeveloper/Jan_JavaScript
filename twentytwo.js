//ProtoType
function robot(name){
    this.name = name
    this.legs = 2
    this.color="white"
}

var pepper = new robot('Pepper')
console.log(">>>peppr>>>",pepper)

function human(name){
    this.name=name;
    this.hands=2,
    this.job= "Automation"
}

var john = new human('John')
console.log(">>>john>>>",john)

human.prototype = new robot;
var eva = new human('Eva')
console.log(">>>eva>>>",eva)

>>>peppr>>> robot {name: "Pepper", legs: 2, color: "white"}
>>>john>>> human {name: "John", hands: 2, job: "Automation"}
>>>eva>>> human {name: "Eva", hands: 2, job: "Automation"}
eva.legs
2


robot.prototype = new human()