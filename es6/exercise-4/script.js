class Person {
    constructor(name) {
        this.name = name
    }
    get get_name() {
        return this.name
    }
    set set_name(name) {
        this.name = name
    }
    walk() {
        console.log("Đang đi")
    }
}

class Programmer extends Person {
    constructor() {
        super();
    }
    set set_language(language) {
        this.language = language
    }
    get get_language() {
        return this.language
    }
    writeCode() {
        console.log("Đang viết code")
    }
}

pro = new Programmer();
pro.walk();
pro.writeCode();