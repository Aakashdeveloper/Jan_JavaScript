var a = [1,2,3]
var b = ["a","v","s"]
var c = [7,87,"hg","jh",8,"kj",true];


var city = ["London","Delhi","Newyork","Amsterdam"]
undefined
typeof(city)
"object"
city.length
4
city[0]
"London"
city[3]
"Amsterdam"
city[city.length-1]
"Amsterdam"


push => add value in last of Array
pop => always take value from end of the array
unshift => add value at the first position 
shift => always take value from first position of the array
slice => take out chunk from array without modify actual array
splice => Can modify actual array by inserting and removing from particular poisiton


var city = ["Venice", "London", "Delhi", "Newyork", "Amsterdam", "Helsinki", "Paris"]
city.slice(2,5)
var city = ["Venice", "London", "Delhi", "Newyork", "Amsterdam", "Helsinki", "Paris"]
city.slice(2,5)
(3) ["Delhi", "Newyork", "Amsterdam"]
city
(7) ["Venice", "London", "Delhi", "Newyork", "Amsterdam", "Helsinki", "Paris"]
city.splice(3,2)
(2) ["Newyork", "Amsterdam"]
city
(5) ["Venice", "London", "Delhi", "Helsinki", "Paris"]
var city = ["Venice", "London", "Delhi", "Newyork", "Amsterdam", "Helsinki", "Paris"]
undefined
city.splice(3,0,'Hongkong','taiwan')
[]
city
(9) ["Venice", "London", "Delhi", "Hongkong", "taiwan", "Newyork", "Amsterdam", "Helsinki", "Paris"]
city.splice(5,1,'Nice','Innsburg')
["Newyork"]
city
(10) ["Venice", "London", "Delhi", "Hongkong", "taiwan", "Nice", "Innsburg", "Amsterdam", "Helsinki", "Paris"]
var city = ["Venice", "London", "Delhi", "Newyork", "Amsterdam", "Helsinki", "Paris"]
undefined
city.indexOf('Delhi')
2
city.indexOf('Hongkong')
-1

var a = [1,2,3]
var b = ['a','b','c']
var a = [1,2,3]
var b = ['a','b','c']

undefined
a+b
"1,2,3a,b,c"
a.concat(b)
(6) [1, 2, 3, "a", "b", "c"]
b.concat(a)
(6) ["a", "b", "c", 1, 2, 3]
var b = ['a','b','c']
undefined
b.toString()
"a,b,c"
var d = b.toString()
undefined
d
"a,b,c"
d.split(',')
(3) ["a", "b", "c"]
var city = ["Venice", "London", "Delhi", "Newyork", "Amsterdam", "Helsinki", "Paris"]
undefined
city.sort()
(7) ["Amsterdam", "Delhi", "Helsinki", "London", "Newyork", "Paris", "Venice"]