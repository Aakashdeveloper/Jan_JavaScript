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

var a = "john is my name"
var a = "john is my name"
undefined
a.replace("john","ammy")
"ammy is my name"
a
"john is my name"
var a = "john is my name is john"
undefined
a.replace(/john/g,"ammy")
"ammy is my name is john"

var a = "john is my name"
a.replace(/ /g,'_')
a.replace(' ','_')

var b = "JavaScript"

a.substring(2,5)
var b = "JavaScript"

b.substring(2,5)
"vaS"
var b = "JavaScript"

b.slice(2,5)
"vaS"
var b = "JavaScript"

b.substring(2)
"vaScript"
var b = "JavaScript"

b.slice(2)
"vaScript"
var b = "JavaScript"

b.substring(2,-1)
"Ja"
var b = "JavaScript"

b.slice(2,-1)
"vaScrip"
var b = "JavaScript"
undefined
b.substr(2,5)
"vaScr"
b.substring(2,5)
"vaS"
b.substr(2,-1)
""


slice(start, end)  => can take only positive value in Range
substring(start, end) => can take -ve value also 
substr(start,length) => can take only positive value in Range

var a= "Hi i am aakash"
undefined
a.slice(4)
" am aakash"
a.slice(4,10)
" am aa"
a.slice(4,-1)
" am aakas"
a
"Hi i am aakash"
a.slice(4,-2)
" am aaka"
a.slice(4,-4)
" am aa"
a.substring(4)
" am aakash"
a.substring(4,10)
" am aa"
a.substring(4,-1)
"Hi i"
a.substring(7,-1)
"Hi i am"
a.substring(7,-4)
"Hi i am"
a.substring(7,-10)
"Hi i am"
a.substring(7,-3)
"Hi i am"
a.substr(4,10)
" am aakash"


var a= 1
var b =1
a+b
1+1 = 2

var a= 1
var b =1
undefined
a.toString()+b.toString()
"11"




var a = "i am doing javascript"
a.charAt()
a.indexOf()

var a = "i am doing javascript"
a.charAt()
"i"
var a = "i am doing javascript"
a.charAt(6)
"o"
a.indexOf('a')
2
a.indexOf('z')
-1
var a = "i am doing javascript"
a.charAt(10)
" "
var a = "i am doing javascript"
a.charAt(11)
"j"

var a = "i am doing javascript"

a.split('')
var a = "i am doing javascript"
undefined
a.split(' ')
(4) ["i", "am", "doing", "javascript"]
var url = "https://github.com/Aakashdeveloper/Edu_Jan_Node_Eveng_20"
undefined
url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "Edu_Jan_Node_Eveng_20"]
var a = "javascript"
undefined
var a = "javascript"
undefined
a.split('')
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]