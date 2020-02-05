RegExp

^([a-z])$

var text = 'a'


var texts = 'a'
undefined
texts.match("^([a-z])$")
(2) ["a", "a", index: 0, input: "a", groups: undefined]
var texts = 1
undefined
texts.match("^([a-z])$")
VM276:1 Uncaught TypeError: texts.match is not a function
    at <anonymous>:1:7
(anonymous) @ VM276:1
var texts = "1"
undefined
texts.match("^([a-z])$")
null
var texts = "A"
undefined
texts.match("^([a-z])$")
null
var texts = "aaaa"
undefined
texts.match("^([a-z])$")
null
var texts = "z"
undefined
texts.match("^([a-z])$")
(2) ["z", "z", index: 0, input: "z", groups: undefined]


^([a-zA-Z0-9]+)$

var texts = "z"
undefined
texts.match("^([a-zA-Z0-9]+)$")
(2) ["z", "z", index: 0, input: "z", groups: undefined]
var texts = "india"
undefined
texts.match("^([a-zA-Z0-9]+)$")
(2) ["india", "india", index: 0, input: "india", groups: undefined]
var texts = "878"
undefined
texts.match("^([a-zA-Z0-9]+)$")
(2) ["878", "878", index: 0, input: "878", groups: undefined]
var texts = "$$$"
undefined
texts.match("^([a-zA-Z0-9]+)$")
null

^([a-zA-Z0-9$#@]+)$

//Extacly 10 digit ex 1234567890
^([0-9]{10})$

ahanda205@gmail.com

^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$


Create pattern for password
capital letter,small letter, number and special charater of length (8,15)