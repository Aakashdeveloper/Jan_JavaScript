/*function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    out = parseInt(a)+parseInt(b)
    document.getElementById('output').innerText = out
}
function sub(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    out = parseInt(a)-parseInt(b)
    document.getElementById('output').innerText = out
}*/

function calc(operater){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    var flag;
    if(a == '' ||  b === ''){
        flag=false
        out= "Please enter value first"
    }else{
        if(isNaN(a) == false && isNaN(b) == false){
            if(operater==="add"){
                out = parseInt(a)+parseInt(b)
            }else{
                out = parseInt(a)-parseInt(b)
            }
            flag=true
        }else{
            flag=false
            out= "Please enter valid input"
        }
    }
   
    
    document.getElementById('output').style.color=flag?'green':'red'
    document.getElementById('output').innerText = out
}


function fizzbuzz(){
    var out = [];
    var userinput = document.getElementById('count').value
    userinput = parseInt(userinput)
    console.log(userinput)

    for(i=1;i<=userinput;i++){
        if(i%3 == 0 && i%5 ==0){
            out.push('fizzbuzz')
        }
        else if(i%3==0){
            out.push('fizz')
           
        }
        else if(i%5==0){
            out.push('buzz')
        }
        else{
            out.push(i)
        }

    }
    
    document.getElementById('output').innerText =out

    

}