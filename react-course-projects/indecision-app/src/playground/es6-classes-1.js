class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Ware koso ga ' + this.name + ' nano jya!';
        return `Ware koso ga ${this.name} nano jya! ${this.age} sai jya.`
    }
    getDescription() {
        return `${this.name} wa ${this.age} rashii zo.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()){
        description += ` Major? to iu yatsu wa ${this.major} nano jya.`
        }

        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasHomeLocation()){
            description+= ` Harabaru ${this.homeLocation} naru kuni kara kita no jya!`;
        }
        return description;
    }
}

const me = new Student('Koko', 300, "History");
console.log(me.getDescription());

const trav = new Traveler('Mario', 26, "New York");
console.log(trav.getDescription());

const other = new Student();
console.log(other.getDescription());
