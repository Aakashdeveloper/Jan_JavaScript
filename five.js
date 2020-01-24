var city= "london"
undefined
city
"london"
city.toUpperCase()
"LONDON"

var city1= "NEWYORK"
undefined
city1.toLowerCase()
"newyork"

var a = "john is my name"
undefined
a.length
15
var a = "   john is my name    "
undefined
a.trim()
"john is my name"
var a = "   john is my name    "
undefined
a.length
22
var b = a.trim()
undefined
b.length
15
var a = "   john is my name    "
undefined
a.trim().length
15

var city = "London"
undefined
city[3]
"d"
city[0]
"L"
city[6]
undefined
city.length
6
city[city.length-1]
"n"

var a = "london"
undefined
a.slice(1)
"ondon"
a.slice(2)
"ndon"
a.slice(2,4)
"nd"

var name="JOhN"
var name ="jMmaY"

var name ="jMmaY"
undefined
name[0]
"j"
name[0].toUpperCase()
"J"
name.slice(1)
"MmaY"
name.slice(1).toLowerCase()
"mmay"
name[0].toUpperCase()+name.slice(1).toLowerCase()
"Jmmay"

///
Take input from the user and convert all letter in toUpperCase and last letter
toLowerCase
///