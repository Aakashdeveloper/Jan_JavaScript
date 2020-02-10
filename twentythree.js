function langauage(name,country){
    this.name = name;
    this.country = country;
}

var hindi = new langauage('Hindi', 'India')

/////////Es6////////

class langauage1 {
    constructor(name,country){
        this.name = name;
        this.country = country;
    }
}

var english = new langauage1('English','UK')


///////Inheritance////////

class geo {
    constructor(lat,long,weather){
        this.lat = lat;
        this.long = long;
        this.weather = weather
    }
}


class langauage1 extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name = name;
        this.country = country;
        this.pop = 84375878
    }
}

var english = new langauage1('English','UK',10.999,3.11)