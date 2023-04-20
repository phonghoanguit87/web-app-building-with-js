class Base {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
    
    get get_name() {
        return this.name;
    }
    
    get get_description() {
        return this.description;
    }
    
    set set_name(name) {
        this.name = name;
    }
    
    set set_description(description) {
        this.description = description;
    }
    
    multiply(number = 1) {
        return number * 3;
    }
}

class Geometry extends Base {
    constructor(height) {
        super();
        this.height = height;
    }
    
    get get_height() {
        return this.height;
    }
    
    set set_height(height) {
        this.height = height;
    }
}

let circle = new Geometry(2);
circle.set_name = "circle";
circle.set_description = "this is circle";
let rs = circle.multiply();

console.log(circle);
console.log(rs);