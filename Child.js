class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Xin chao toi la ${this.name}`);
    }
}

class Child extends Person {
    constructor(name, age, toy) {
        super(name, age);
        this.toy = toy;
    }
    show() {
        console.log(`Name: ${this.name} | Age: ${this.age}`);
    }

    sayHello() {
        super.sayHello();
        console.log(`Xin chao em la ${this.name}, thich choi ${this.toy}`);
    }
}

const teo = new Child('Teo', 10, 'Oto');
teo.sayHello();
teo.show();
console.log(teo);
