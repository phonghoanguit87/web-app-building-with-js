class Animal {
    constructor(name) {
        this.name = name;
    }
    
    get get_name() {
        return this.name;
    }
    
    set set_name(name) {
        this.name = name;
    }
}

let animals = [
    new Animal("Monkey"),
    new Animal("Cat"),
    new Animal("Dog"),
    new Animal("Fish")
];
let nameOfAnimals = [];

animals.forEach(animal => {
    nameOfAnimals.push(animal.get_name);
})

console.log(nameOfAnimals);

