var a = 10

if(a>10){
    console.log('hii')
}else{
    console.log('bie')
}

//keyword  nameoffunction(parameters)
function add(a,b){
    return a+b
}

add(83,35)

//Es5

function isEven(userInput){
    var output;
    if(userInput%2==0){
        output="Number is even"
    }else{
        output="Number is odd"
    }
    return output
}

isEven(34)
"Number is even"
isEven(361)
"Number is odd"


//Function Defination(Method)
var isEven = function(userInput){
    var output;
    if(userInput%2==0){
        output="Number is even"
    }else{
        output="Number is odd"
    }
    return output
}

isEven(34)
"Number is even"
isEven(361)
"Number is odd"


/////////
Es6
///////

const isEven = (userInput) => {
    var output;
    if(userInput%2==0){
        output="Number is even"
    }else{
        output="Number is odd"
    }
    return output
}
