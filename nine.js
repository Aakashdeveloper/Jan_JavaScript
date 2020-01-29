Date()
"Wed Jan 29 2020 02:42:34 GMT+0000 (Greenwich Mean Time)"
var a = new Date()
undefined
a
Wed Jan 29 2020 02:42:54 GMT+0000 (Greenwich Mean Time)
var a = new Date().getDate()
undefined
a
29
var a = new Date().getDay()
undefined
a
3


switch(new Date().getDay()){
    case 0:
        console.log('Today is sunday')
        break;
    case 1:
        console.log('Today is monday')
        break;
    case 3:
         console.log('Today is wed')
         break;
    default:
        console.log('i dont know')
}

switch(a%2==0){
    case true:
        console.log('number '+a+' is even')
        break;
    case false:
        console.log(`number ${a} is odd`)
        break;
    default:
        console.log('unkown number')
}

//Es5
var a = 10
var b = 'my age is '+a

//Es6
var a = 10
var b = `my age is ${a}`