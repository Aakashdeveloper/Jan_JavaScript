localStorage.setItem('token','ete23etwt32e')
undefined
localStorage.getItem('token')
"ete23etwt32e"
localStorage.removeItem('token')
undefined
localStorage.getItem('token')


var a = localStorage.getItem('token')
var counter = 0
if(a == null){
    console.log('No Token')
    counter = counter +1
    localStorage.setItem('counter',counter)
}else{
    console.log(a)
    localStorage.removeItem('token')
}