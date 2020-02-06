//literal
var country ={
    name:'India',
    capital:'Delhi',
    population:867656458
}

typeof(country)
"object"
country.name
"India"
country.capital
"Delhi"
country.population
867656458
country['name']
"India"
country['population']
867656458

var country ={
    name:'India',
    capital:'Delhi',
    population:867656458
}
undefined
country.language = "Hindi"
"Hindi"
country
{name: "India", capital: "Delhi", population: 867656458, language: "Hindi"}
country.capital="Mumbai"
"Mumbai"
country
{name: "India", capital: "Mumbai", population: 867656458, language: "Hindi"}
delete country.population
true
country
{name: "India", capital: "Mumbai", language: "Hindi"}


//Constructor
var technology = new Object();
typeof(technology)
"object"
technology.language="JavaScript"
"JavaScript"
technology.demand="Very High"
"Very High"
technology
{language: "JavaScript", demand: "Very High"}


var welcome ={
    firstname:'Bob',
    lastname:'Steve',
    greet:function(){
        return "hi bob steve welcomee"
    }
}

var calc = {
    sum:function(a,b){
        return a+b
    },
    sub:function(a,b){
        return a-b
    }
}

var db ={
    select:function(table){
        return `select * from ${table}`
    }
}


var firstname='John'
var lastname='gery'

var welcome ={
    firstname:'Bob',
    lastname:'Steve',
    greet:function(){
        return `hi ${this.firstname} ${this.lastname} welcome`
    }
}


const city = [
    {name:"Delhi",country:'India'},
    {name:"Paris",country:'France'},
    {name:"Amsterdam",country:'Netherland'}
]