/*function hello(){
    console.log('Welcome to JavaScript')
}

hello()*/
//no name /anonymous functions

(function(){
    console.log('Welcome to JavaScript')
}())


function loopme(userInput){
    for(i=0;i<userInput;i++){
        console.log(i)
    }
}
//Generator Function

function * loopme(userInput){
    for(i=0;i<userInput;i++){
      yield i
    }
}

var out = loopme(5)
undefined
loopme(3)
loopme {<suspended>}
out.next()
{value: 0, done: false}
out.next()
{value: 1, done: false}
out.next()
{value: 2, done: false}
out.next()
{value: 3, done: false}
out.next()
{value: 4, done: false}
out.next()
{value: undefined, done: true}