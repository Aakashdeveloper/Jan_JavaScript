function calc(){
    this.sum = function(a,b){return a+b}
    this.sub = function(a,b){return a-b}
}

var mysum = new calc()
mysum.add(1,2)


var test = new calc()