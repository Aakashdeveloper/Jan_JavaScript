Map
Filter

var a = [1,2,3,4]
a.map((data) => { console.log(data)})
a.map((data) => { return (data*2)})



var a = [1,2,3,4]
a.filter((data) => { return (data*2)})


var b = [0,1,2,3]
b.map((data) => { return (data*2)})
[0,2,4,6]
b.filter((data) => { return (data*2)})
[false,true,true,true]
[1,2,3]



map => help to iterarte over data
filter => help to return only those value for which condition is true


var a = [19,43,23,15,21]
a.filter((item) => { return item>20})

var a = [19,43,23,15,21]
a.filter((item) => { return item>20})
(3) [43, 23, 21]
a.map((item) => { return item>20})